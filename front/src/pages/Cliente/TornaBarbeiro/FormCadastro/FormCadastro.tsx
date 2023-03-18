import React from 'react'
import { useStepper } from '../../../Barbeiro/CadastroBarbeiro/Components/StepperCadastro/Context/StepperContextProvider';
import FormCadastroBarbearia from './FormTornaBarbeiro';

const FormCadastro = () => {
  const { passoAtual } = useStepper();
  return (
    <>
    {passoAtual === 0 && <FormCadastroBarbearia />}
    {passoAtual === 1 && "<FormCadastroEndereco />"}
    {passoAtual === 2 && "<FormCadastroBarbeiro />"}
    {passoAtual === 3 && "<FormCadastroServicos />"}
    {passoAtual === 4 && "<FormCadastroAtendimento />"}
  </>
  )
}

export default FormCadastro