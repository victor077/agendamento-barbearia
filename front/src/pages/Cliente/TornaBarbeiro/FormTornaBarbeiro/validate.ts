import * as zod from "zod";

export const validationSchema = zod.object({
  razao: zod.string().trim().nonempty('Este campo é obrigatório!').min(1, { message: "Esse campo é obrigatório" }),
  cep: zod.string(),
  email: zod.string().trim().nonempty('Este campo é obrigatório!').email('email inválido'),
  celular: zod.string().trim().nonempty('Este campo é obrigatório!').length(9, { message: "Este campo precisa ter oito números" }),
  senha: zod.string().trim().nonempty('Este campo é obrigatório!').regex(new RegExp("(?=.*[}{,.^?~=+\-_\/*\-+.\|])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}"), "A senha deve conter mais de 8 caracteres, tendo pelo menos um númerico e um especial"),
  confirmarSenha: zod.string().nonempty('Este campo é obrigatório!'),
}).refine((data) => data.senha === data.confirmarSenha, {
  message: "Sua senha precisa ser igual a de confirmação",
  path: ["confirmarSenha"],
})

export type FormValuesCadastroBarbeiro = zod.infer<typeof validationSchema> 