import * as zod from 'zod'

export const validationSchema = zod.object({
  servico1: zod.string(),
  servico2: zod.string(),
  servico3: zod.string(),
  tempo1: zod.number(),
  tempo2: zod.number(),
  tempo3: zod.number(),
  valor1: zod.number(),
  valor2: zod.number(),
  valor3: zod.number(),
})

export type ServicosFormValue = zod.infer<typeof validationSchema>
