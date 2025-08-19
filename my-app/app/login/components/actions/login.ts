'use server'

// Validation
import { login_validation } from "@/validation/login"
// Libs
import z from 'zod'
import { SignJWT } from "jose"
// Next
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const login = async (data: z.infer<typeof login_validation>) => {

    const match = process.env.PASSWORD! === data.password

    if (match) {
        const ACCESS_SECRET = new TextEncoder().encode(process.env.ACCESS_SECRET!)

        const token = await new SignJWT()
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime("12h")
            .sign(ACCESS_SECRET)

        const expiryDate = new Date()
        expiryDate.setHours(expiryDate.getHours() + 12)

        const cookies_store = await cookies()

        cookies_store.set({
            name: "auth_token",
            value: token,
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
            expires: expiryDate
        })

        redirect('/')
    } else {
        return 'Credenciais inválidas.'
    }
}