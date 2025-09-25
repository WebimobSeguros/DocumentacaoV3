// Shadcn
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

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
        { versao: "V1", techStack: "C#, .NET ", implantacao: "Máquina Virtual", periodo_de_atividade: "Agosto de 2019 - Setembro de 2024" },
        { versao: "V2", techStack: "React SPA / PHP / MySQL", implantacao: " Hostinger Shared Cloud", periodo_de_atividade: "Outubro de 2024 - Setembro de 2025" },
        { versao: "V3", techStack: "Next / Postgres", implantacao: "Vercel e Supabase", periodo_de_atividade: "Outubro de 2025 - Em atividade" },
    ];

    const NossosProdutos = [
        { produto: "Seguro Incendio", descricao: "O Seguro Incêndio é uma proteção obrigatória em contratos de locação (Lei do Inquilinato nº 8.245/91) que cobre danos ao imóvel causados por incêndio, explosão ou queda de raio etc.", Oferecido_Por: "Porto Seguro, Tokio Marine" },
        { produto: "Seguro Fiança", descricao: "O Seguro Fiança é uma garantia locatícia que substitui a necessidade de fiador, protegendo o locador contra inadimplência do inquilino. Ele cobre o pagamento de aluguéis e encargos em caso de atraso, além de eventuais danos ao imóvel, funcionando como uma segurança para o locador e permitindo que o inquilino alugue o imóvel de forma mais ágil e sem burocracia.", Oferecido_Por: "Porto Seguro, Tokio Marine, Too, Pottencial" },
        { produto: "Titulo Capitalização", descricao: "O Título de Capitalização é uma alternativa de garantia locatícia em que o inquilino deposita um valor em um título administrado por uma instituição financeira (Porto Seguro), que pode ser resgatado ao final do contrato caso não haja inadimplência ou danos ao imóvel. Ele serve como segurança para o locador, garantindo o pagamento do aluguel e encargos, ao mesmo tempo em que permite que o valor seja recuperado pelo locatário, tornando-se uma opção prática e segura para ambas as partes.", Oferecido_Por: "Porto Seguro" },

    ]

    const StakeHolders = [
        { nome: "Seguradora (Porto, Tokio, Too, Pottencial)", papel: "As seguradoras são parceiras essenciais da Webimob, pois são elas que fornecem os produtos de garantia e proteção, como seguro fiança, seguro incêndio e título de capitalização.", grau_de_poder: "Alto", grau_de_influencia: "Alto" },

        { nome: "Webimob", papel: "A Webimob atua como intermediadora no mercado imobiliário, oferecendo uma plataforma que conecta as imobiliárias às seguradoras, simplificando o processo de contratação de seguros e garantias do ramo imobiliário.", grau_de_poder: "Médio", grau_de_influencia: "Alto" },

        { nome: "Imobiliarias", papel: "A imobiliária tem o papel de intermediar a relação entre locador e inquilino, cuidando da administração do imóvel e garantindo que o processo de locação seja seguro e transparente. A imobiliária utiliza o sistema Webimob a fim de contratar os produtos oferecidos pela corretora para sua base de clientes.", grau_de_poder: "Alto", grau_de_influencia: "Alto" },

        { nome: "Locador/Proprietario", papel: "O locador, ou proprietário, é responsável por disponibilizar o imóvel para locação e garantir que ele esteja em condições adequadas de uso, sendo a parte que busca segurança no recebimento do aluguel e na preservação do bem.", grau_de_poder: "Baixo", grau_de_influencia: "Médio" },

        { nome: "Locatário/Inquilino/Pretendente", papel: "Responsável por arcar com custos, pagar aluguel em dia e manter o imóvel conforme contrato.", grau_de_poder: "Baixo", grau_de_influencia: "Médio" },
    ]

    const colorBadgeStakeHolders = (value: string) => {
        switch (value) {
            case 'Alto':
                return 'bg-green-700/15 text-green-700/90 border border-green-700/40';
            case 'Médio':
                return 'bg-blue-700/15 text-blue-700/90 border border-blue-700/40';
            case 'Baixo':
                return 'bg-orange-700/15 text-orange-700/90 border border-orange-700/40';
            default:
                return '';
        }
    }

    return (
        <main>

            <Container>
                <Heading>O que é a Webimob</Heading>
                <Paragraph >
                    A Webimob é uma plataforma digital especializada em seguros imobiliários e garantias locatícias, que tem como objetivo simplificar e agilizar os processos de locação, oferecendo tecnologia e consultoria para reduzir burocracias e aumentar a segurança nas operações. Suas soluções incluem seguro fiança, seguro incêndio, título de capitalização como garantia locatícia, cotação simultânea em diversas seguradoras e consultoria especializada com atendimento humanizado. A empresa atua como parceira de imobiliárias e locadores, unindo inovação, agilidade e compromisso com o cliente para proteger e facilitar os negócios imobiliários.
                </Paragraph>
            </Container>
            <Container>
                <Heading>História da plataforma</Heading>
                <div className="mt-2 border-gray-800 overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="border-b-2  bg-gray">
                            <TableHead className="font-bold w-1/4">Versão</TableHead>
                            <TableHead className="font-bold w-1/4">TechStack</TableHead>
                            <TableHead className="font-bold w-1/4">Implantação </TableHead>
                            <TableHead className="font-bold w-1/4">Periodo de atividade</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {historiaPlataforma.map((historia, idx) => (
                            <TableRow key={idx} className="border-b hover:bg-gray-50">
                                <TableCell className="w-1/4">{historia.versao}:</TableCell>
                                <TableCell className="w-1/4">{historia.techStack}</TableCell>
                                <TableCell className="w-1/4">{historia.implantacao}</TableCell>
                                <TableCell className="w-1/4">{historia.periodo_de_atividade}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </div>
            </Container>
            <Container>
                <Heading>Stakeholders</Heading>
                <div className="mt-2 border-gray-800 overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-b-2  bg-gray">
                                <TableHead className="font-bold w-1/4">Nome</TableHead>
                                <TableHead className="font-bold w-1/4 ">Papel</TableHead>
                                <TableHead className="font-bold w-1/4 ">Grau de poder</TableHead>
                                <TableHead className="font-bold w-1/4 ">Grau de influência</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {StakeHolders.map((holders, idx) => (
                                <TableRow key={idx} className="border-b hover:bg-gray-50">
                                    <TableCell className="w-1/4">{holders.nome}:</TableCell>
                                    <TableCell className="w-1/4 whitespace-normal break-words pr-20">{holders.papel}</TableCell>
                                    <TableCell className="w-1/4">
                                        <Badge className={colorBadgeStakeHolders(holders.grau_de_poder)}>
                                            {holders.grau_de_poder}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="w-1/4">
                                        <Badge className={colorBadgeStakeHolders(holders.grau_de_influencia)}>
                                            {holders.grau_de_influencia}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Container>
            <Container>
                <Heading>Produtos</Heading>
                <div className="mt-2 border-gray-800 overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-b-2 bg-gray">
                                <TableHead className="font-bold">Nome</TableHead>
                                <TableHead className="font-bold">Descrição</TableHead>
                                <TableHead className="font-bold">Oferecido Por</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {NossosProdutos.map((produto, idx) => (
                                <TableRow className="border-b hover:bg-gray-50" key={idx}>
                                    <TableCell className="w-1/4">{produto.produto}:</TableCell>
                                    <TableCell className="w-1/4 whitespace-normal break-words pr-20">{produto.descricao}</TableCell>
                                    <TableCell className="w-2/4 whitespace-normal break-words">{produto.Oferecido_Por}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Container>
        </main>)
}