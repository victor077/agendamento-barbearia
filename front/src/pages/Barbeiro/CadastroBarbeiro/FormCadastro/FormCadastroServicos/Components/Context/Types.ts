export const initialAlternative: ServicosValues[] = [
  {
    idServico: 1,
    nm_servico: '',
    tempo: 0,
    preco: 0,
  },
]

export type ServicosValues = {
  idServico: number
  nm_servico: string
  tempo: number
  preco: number
}
