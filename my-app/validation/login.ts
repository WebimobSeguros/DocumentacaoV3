// Libs
import z from 'zod'

export const login_validation = z.object({
    password: z.string().min(1, 'Campo obrigatório')
})

export const login_default_values = {
    password: ''
}