import * as zod from "zod";

export const validationSchema = zod.object({
  nome: zod.string().trim().nonempty('Este campo é obrigatório!'),
  sobrenome: zod.string().trim(),
  email: zod.string().trim().nonempty('Este campo é obrigatório!').email('email inválido'),
  celular: zod.string().trim().nonempty('Este campo é obrigatório!').regex(new RegExp("^\\d{9,11}$"), "Número inválido"),
  senha: zod.string().trim().nonempty('Este campo é obrigatório!').regex(new RegExp("(?=.*[}{,.^?~=+\-_\/*\-+.\|])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}"), "A senha deve conter mais de 8 caracteres tendo pelo menos um númerico e um especial"),
  confirmarSenha: zod.string().trim().nonempty('Este campo é obrigatório!'),
}).refine((data) => data.senha === data.confirmarSenha, {
  message: "Sua sua confirmação de senha precisa ser identica a sua senha",
  path: ["confirmarSenhaBarbearia"],
});


export type BarbeiroFormValue = zod.infer<typeof validationSchema>;

