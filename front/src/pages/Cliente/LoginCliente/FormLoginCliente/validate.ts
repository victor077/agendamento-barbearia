import * as zod from "zod";

export const validationSchema = zod.object({
  email: zod.string(),
  senha: zod.string(),
})

export type FormValuesLoginCliente = zod.infer<typeof validationSchema> 