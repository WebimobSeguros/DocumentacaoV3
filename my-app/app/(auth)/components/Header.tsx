// Next
import Image from "next/image"
import Link from "next/link"
// Utils
import { navigation } from "@/utils/navigation"
// Shadcn
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
// Icons
import { Menu } from "lucide-react"

export const Header = () => {
    return (
        <header className={'flex items-center gap-3 border-b sticky top-0 bg-background p-3 justify-between z-50'}>
            <div className={'flex items-center gap-3'}>
                <Image
                    width={70}
                    height={50}
                    className={'invert'}
                    src={'/logo-transparent.png'}
                    alt={'Logo Webimob'} />
            </div>
            <nav>
                <ul className={'items-center gap-2 pr-5 hidden md:flex'}>
                    {navigation.map(item => (
                        <Link key={item.title} href={item.link}>
                            <li>
                                <Button variant={'ghost'} size={'sm'}>
                                    <item.Icon />{item.title}
                                </Button>
                            </li>
                        </Link>
                    ))}
                </ul>
                <Popover>
                    <PopoverTrigger asChild className={'flex md:hidden'}>
                        <Button size={'icon'} variant={'secondary'}>
                            <Menu />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <ul className={'flex flex-col items-center gap-2'}>
                            {navigation.map(item => (
                                <Link key={item.title} href={item.link} className={'w-full'}>
                                    <li>
                                        <Button variant={'ghost'} size={'sm'} className={'w-full'}>
                                            <item.Icon />{item.title}
                                        </Button>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </PopoverContent>
                </Popover>
            </nav>
        </header>
    )
}