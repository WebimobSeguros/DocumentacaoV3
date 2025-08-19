// Components
import { LoginForm } from "./components/LoginForm"
// Next
import Image from "next/image"

export default async function login() {

    return (
        <div className={'max-w-[300px] mx-auto mt-20'}>
            <Image
                height={100}
                width={120}
                alt={'Logo'}
                className={'invert dark:invert-0 mb-10 mx-auto'}
                src={'/logo-transparent.png'} />

            <p className={'text-3xl font-bold'}>Bem vindo!</p>
            <p className={'mb-7 text-sm text-muted-foreground'}>Insira suas credenciais de acesso</p>

            <LoginForm />
        </div>
    )
}