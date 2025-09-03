"use client"

// Libs
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
// Shadcn
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
// Validation
import { login_default_values, login_validation } from "@/validation/login"
// Icons
import { LogIn } from "lucide-react"
// Actions
import { login } from "./actions/login"
// React
import { useTransition } from "react"

export const LoginForm = () => {

    const [pending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof login_validation>>({
        resolver: zodResolver(login_validation),
        defaultValues: login_default_values
    })

    const loginCallback = async (data: z.infer<typeof login_validation>) => {
        startTransition(() => {
            login(data).then(res => {
                if (res) {
                    toast.warning(res)
                }
            })
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => loginCallback(data))} className="space-y-5">
                <FormField
                    control={form.control}
                    name={'password'}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Senha</FormLabel>
                            <FormControl>
                                <Input
                                    type={'password'}
                                    placeholder="Digite a senha" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    variant={'secondary'}
                    className={'w-full'}
                    disabled={pending}>
                    {pending ?
                        <>
                            Entrando...
                        </> :
                        <>
                            Entrar
                            <LogIn />
                        </>}
                </Button>
            </form>
        </Form>
    )
}