// Next
import Image from "next/image"
import Link from "next/link"
// Utils
import { navigation } from "@/utils/navigation"

export const Footer = () => {
    return (
        <footer className={'w-full mt-6 bg-cyan-950 p-5 min-h-70 flex items-center justify-center gap-5 z-50'}>
            <Image
                width={200}
                height={50}
                src={'/logo-transparent.png'}
                alt={'Logo Webimob'} />

            <div>
                <ul className={'text-blue-100 flex flex-col gap-3'}>
                    {navigation.map(item => (
                        <Link key={item.title} href={item.link}>
                            <li className={'text-sm'}>{item.title}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </footer>
    )
}