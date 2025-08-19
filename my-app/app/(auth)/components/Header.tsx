// Next
import Image from "next/image"
import Link from "next/link"
// Utils
import { navigation } from "@/utils/navigation"

export const Header = () => {
    return (
        <header className={'flex items-center gap-3 border-b-4 border-b-cyan-950 sticky top-0 bg-background p-3 justify-between z-50'}>
            <div className={'flex items-center gap-3'}>
                <Image
                    width={60}
                    height={50}
                    className={'invert'}
                    src={'/logo-transparent.png'}
                    alt={'Logo Webimob'} />
                <h1 className={'font-medium text-sm'}>Documentação</h1>
            </div>
            <nav>
                <ul className={'flex items-center gap-4'}>
                    {navigation.map(item => (
                        <Link key={item.title} href={item.link}>
                            <li className={'text-sm'}>{item.title}</li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </header>
    )
}