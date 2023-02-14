import { ReactNode } from 'react'
import React, {
  createContext,
  PropsWithChildren,
  useState,
  memo,
  useContext,
  useCallback,
} from 'react'
import { useNavigate } from 'react-router-dom'


export type PassoValue = {
  numeroPasso: number
  nomePasso: string
  labelConfirmar: string
  labelVoltar: string
}

type StepperValues = {
  handleAvancar: () => void
  handleVoltar: () => void
  atualizarPasso: (passo: number) => void
  passos: PassoValue[]
  passoAtual: number
}

type StepperProviderProps = {
  passos: PassoValue[]
}

const StepperContext = createContext<StepperValues | null>(null)

const StepperContextProvider = ({
  children,
  passos,
}: PropsWithChildren<StepperProviderProps>) => {
  const navigate = useNavigate()
  const [passoAtual, setPassoAtual] = useState(0)

  const handleAvancar = useCallback(() => {
    setPassoAtual((prevPassoAtual) => prevPassoAtual + 1)
  }, [passoAtual])

  const handleVoltar = useCallback(() => {
    if (passoAtual !== 0) {
      return setPassoAtual((prevPassoAtual) => prevPassoAtual - 1)
    }
  }, [passoAtual])

  const atualizarPasso = useCallback((passo: number) => {
    setPassoAtual(passo)
  }, [])

  const values = {
    handleAvancar,
    handleVoltar,
    passos,
    passoAtual,
    atualizarPasso,
  }

  return (
    <StepperContext.Provider value={values}>{children}</StepperContext.Provider>
  )
}

export const useStepper = () => {
  const context = useContext(StepperContext)

  if (!context) {
    throw new Error(
      'useStepper deve ser utilizado dentro de um StepperProvider!',
    )
  }
  return context
}

export default StepperContextProvider
