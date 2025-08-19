// Next
import Image from "next/image"

export const Header = () => {
    return (
        <header className={'flex items-center gap-3 border-b sticky top-0 bg-background p-3'}>
            <Image
                width={60}
                height={50}
                className={'invert'}
                src={'/logo-transparent.png'}
                alt={'Logo Webimob'} />
            <h1 className={'font-medium text-sm'}>Documentação</h1>
        </header>
    )
}