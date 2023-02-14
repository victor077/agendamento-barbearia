import * as zod from "zod";

export const validationSchema = zod.object({
  email: zod.string().email(),
  senha: zod.string(),
})

export type FormValuesLoginBarbeiro = zod.infer<typeof validationSchema> 