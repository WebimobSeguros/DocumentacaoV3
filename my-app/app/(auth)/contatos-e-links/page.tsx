// Shadcn
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
// Utils
import { contatos_e_links } from "@/utils/contatos_e_links"
// Next
import Link from "next/link"
// Icons
import { ExternalLink } from "lucide-react"

export default function ContatosELinks() {

    return (<>
        <Accordion type="single" collapsible>
            {contatos_e_links.map(item => (
                <AccordionItem value={item.titulo} key={item.titulo}>
                    <AccordionTrigger>
                        {item.titulo}
                    </AccordionTrigger>
                    <AccordionContent>
                        <section className={'mb-4'}>
                            <Table className={'border mb-3'}>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Título</TableHead>
                                        <TableHead className={'pl-4'}>Link</TableHead>
                                        <TableHead>Usuário</TableHead>
                                        <TableHead>Senha</TableHead>
                                        <TableHead>Anotações</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {item.links.map(link => (
                                        <TableRow key={link.titulo}>
                                            <TableCell className="font-medium">
                                                <Badge>{link.titulo}</Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Link href={link.link}>
                                                    <Button variant={'link'} size={'sm'}>
                                                        Acessar Link <ExternalLink />
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell>{link.usuario}</TableCell>
                                            <TableCell>{link.senha}</TableCell>
                                            <TableCell className={'text-muted-foreground text-xs'}>{link.anotacoes}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Table className={'border'}>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nome</TableHead>
                                        <TableHead>Setor</TableHead>
                                        <TableHead>Número</TableHead>
                                        <TableHead>E-mail</TableHead>
                                        <TableHead>Anotações</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {item.contatos.map(link => (
                                        <TableRow key={link.nome}>
                                            <TableCell className="font-medium">
                                                <Badge variant={'secondary'}>
                                                    {link.nome}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{link.setor}</TableCell>
                                            <TableCell>{link.numero}</TableCell>
                                            <TableCell>{link.email}</TableCell>
                                            <TableCell className={'text-muted-foreground text-xs'}>{link.anotacoes}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </section>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </>)
}