// Shadcn
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
// Next
import Link from "next/link"
// Icons
import { ExternalLink } from "lucide-react"
// Utils
import { servicos_e_assinaturas } from "@/utils/servicos_e_assinaturas"

export default function ServicoesEAssinaturas () {
    return (
        <div>
            <h1 className={'text-xl font-bold mb-2'}>Serviços e Assinaturas</h1>
            <p className={'text-muted-foreground text-sm mb-4'}>
                Lista de serviços complementares.
            </p>

            <Table className={'border mb-3'}>
                <TableHeader>
                    <TableRow>
                        <TableHead>Título</TableHead>
                        <TableHead className={'pl-4'}>Link</TableHead>
                        <TableHead>Descrição</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {servicos_e_assinaturas.map(item => (
                        <TableRow key={item.titulo}>
                            <TableCell className="font-medium w-1/3">
                                <Badge>{item.titulo}</Badge>
                            </TableCell>
                            <TableCell className="w-1/3">
                                <Link href={item.link} target={'_blank'}>
                                    <Button variant={'link'} size={'sm'}>
                                        Acessar Link <ExternalLink />
                                    </Button>
                                </Link>
                            </TableCell>
                            <TableCell className={'w-1/3 whitespace-normal break-words '}>{item.descricao}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>

    )
}

