import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SobreAWebimob() {
    const Heading = ({ children }: { children: React.ReactNode }) => (
        <h1 className="text-lg font-bold">
            {children}
        </h1>
    )
    const Paragraph = ({ children }: { children: React.ReactNode }) => (
        <p className="mb-5">
            {children}
        </p>
    )
    const List = ({ data }: { data: string[] }) => (
        <ul className="list-disc">
            {data.map((item, index) => (
                // nao recomendado para conteudos dinamicos
                <li className="ml-4" key={index}>
                    {item}
                </li>
            ))}
        </ul>
    )
    const Container = ({ children }: { children: React.ReactNode }) => (
        <div className="border-b p-3">
            {children}
        </div>
    )

    const historiaPlataforma = [
        {versao: "V1", techStack: "C#, .NET ", implantacao: "Máquina Virtual", periodo_de_atividade: "2019 - 2024 final", anotacoes: ""},
        {versao: "V2", techStack: "React SPA / PHP / MySQL", implantacao: " Hostinger Shared Cloud", periodo_de_atividade: "2023 meio - 2025 jan", anotacoes: ""},
        {versao: "V3", techStack: "Next / Postgres", implantacao: "Vercel e Supabase", periodo_de_atividade: "abril 2025 - set 2025", anotacoes: ""},
    ];

    const NossosProdutos = [
        {produto: "Seguro Incendio", descricao: "Sem fiador, sem cheque caução Não se classifica como um seguro"},
        {produto: "Seguro Fiança", descricao: "(analise de crédito, score O dinheiro é do inquilino"},
        {produto: "Titulo Capitalização", descricao: "opção de incluir inquilino adicional seguradora guarda o dinheiro"},

    ]

    const StakeHolders = [
        {nome: "Seguradora", papel: "colocar", grau_de_poder:"Alto", grau_de_influencia:"Alto"},
        {nome: "Webimob", papel: "colocar", grau_de_poder:"Medio", grau_de_influencia:"Alto"},
        {nome: "Imobiliarias", papel: "colocar", grau_de_poder:"Alto", grau_de_influencia:"Alto"},
        {nome: "Locador/Proprietario", papel: "colocar", grau_de_poder:"Pouco", grau_de_influencia:"Medio"},
        {nome: "Locatário/Inquilino/Pretendente", papel: "colocar", grau_de_poder:"Pouco", grau_de_influencia:"Medio"},
    ]

    return (
        <main>

            <Container>
                <Heading>O que é a Webimob</Heading>
                <Paragraph>
                    corretora de seguros imobiliarios
                </Paragraph>
            </Container>
            <Container>
                <Heading>História da plataforma</Heading>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Versão</TableHead>
                            <TableHead>TechStack</TableHead>
                            <TableHead>Implantação</TableHead>
                            <TableHead>Periodo de atividade</TableHead>
                            <TableHead>Anotações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                            {historiaPlataforma.map((historia, idx) =>(
                                <TableRow key={idx}>
                                    <TableCell>{historia.versao}</TableCell>
                                    <TableCell>{historia.techStack}</TableCell>
                                    <TableCell>{historia.implantacao}</TableCell>
                                    <TableCell>{historia.periodo_de_atividade}</TableCell>
                                    <TableCell>{historia.anotacoes}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </Container>
            <Container>
                <Heading>Stakeholders</Heading>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nome</TableHead>
                            <TableHead>Papel</TableHead>
                            <TableHead>grau de poder</TableHead>
                            <TableHead>grau de influencia</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                            {StakeHolders.map((holders, idx) =>(
                                <TableRow key={idx}>
                                    <TableCell>{holders.nome}</TableCell>
                                    <TableCell>{holders.papel}</TableCell>
                                    <TableCell>{holders.grau_de_poder}</TableCell>
                                    <TableCell>{holders.grau_de_influencia}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </Container>
            <Container>
                <Heading>Produtos</Heading>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nome</TableHead>
                            <TableHead>Descrição</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                            {NossosProdutos.map((produto, idx) =>(
                                <TableRow key={idx}>
                                    <TableCell>{produto.produto}</TableCell>
                                    <TableCell>{produto.descricao}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </Container>
        </main>)
}