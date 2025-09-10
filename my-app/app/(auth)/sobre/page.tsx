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

                <List data={[
                    "V1 - C# .NET / SQL Server - Máquina Virtual - 2019 - 2024 final",
                    "V2 - React SPA / PHP / MySQL - Hostinger Shared Cloud - 2023 meio - 2025 jan",
                    "v3 - Next / Postgres - Vercel e Supabase - abril 2025 - set 2025",
                ]}/>
            </Container>
            <Container>
                <Heading>Stakeholders</Heading>
                <List data={[
                    "Seguradora - Empresa que avalia risco!!!!",
                    "Webimob (Usuários)",
                    "Imobiliarias (Usuários)",
                    "Locador/Proprietario",
                    "Locatário/Inquilino/Pretendente",
                ]} />
            </Container>
            <Container>
                <Heading>Nossos Produtos</Heading>
                <List data={[
                    "Seguro Incendio - Risco: FOGO",
                    "Calculo (Cobertura de incendio, cobertura de conteudo, assistencia, tipo do imovel)",
                    "Analise (Sem fiador, sem cheque caução) (analise de crédito, score, opção de incluir inquilino adicional) - Todas as seguradoras parceiras fazem (Too, Tokio Marine, Pottencial, Porto Seguro)",
                    "Título de capitalização - Não se classifica como um seguro",
                    "Sem Analise - O dinheiro é do inquilino. A seguradora guarda o dinheiro. Webimob e Seguradora tiram uma comissão. - Só a Porto faz.",
                    "Seguro Incendio - Risco: FOGO"

                ]} />
            </Container>
        </main>)
}