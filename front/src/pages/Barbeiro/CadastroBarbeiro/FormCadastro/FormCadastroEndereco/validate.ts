import * as zod from 'zod'

export const validationSchema = zod.object({
    cep: zod.string().trim().nonempty('Este campo é obrigatório!').regex(new RegExp("(^[0-9]{5})-?([0-9]{3}$)"), "Cep inválido"),
    cidade: zod.string().nonempty('Este campo é obrigatório!'),
    estado: zod.string().nonempty('Este campo é obrigatório!'),
    bairro: zod.string().nonempty('Este campo é obrigatório!'),
    logradouro: zod.string().nonempty('Este campo é obrigatório!'),
    numero: zod.string(),
})

export type EnderecoFormValue = zod.infer<typeof validationSchema>
