import * as zod from 'zod'

export const validationSchema = zod.object({
  razao: zod.string().trim().nonempty('Este campo é obrigatório!'),
  emailBarbearia: zod.string().trim().nonempty('Este campo é obrigatório!').email('email inválido'),
  cnpj: zod.string().trim().nonempty('Este campo é obrigatório!').regex(new RegExp("([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"), "Cep inválido"),
  celularBarbearia: zod.string().trim().nonempty('Este campo é obrigatório!').regex(new RegExp("^\\d{9,11}$"), "Número inválido"),
  senhaBarbearia: zod.string().trim().nonempty('Este campo é obrigatório!').regex(new RegExp("(?=.*[}{,.^?~=+\-_\/*\-+.\|])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}"), "A senha deve conter mais de 8 caracteres tendo pelo menos um númerico e um especial"),
  confirmarSenhaBarbearia: zod.string().trim().nonempty('Este campo é obrigatório!'),
}).refine((data) => data.senhaBarbearia === data.confirmarSenhaBarbearia, {
  message: "Sua sua confirmação de senha precisa ser identica a sua senha",
  path: ["confirmarSenhaBarbearia"],
});

export type BarbeariaFormValue = zod.infer<typeof validationSchema>
