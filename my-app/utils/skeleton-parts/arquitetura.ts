export type Arquitetura = {
    id: string
    titulo: string
    descricao: string
    arquivo_diagrama: string
    sections: {
        title: string
        paragrafos: {
            text: string,
            list?: string[]
        }[]
    }[]
}[]

export const arquitetura: Arquitetura = [
    {
        id: 'implantacao',
        titulo: 'Diagrama de Implantação',
        descricao: 'Mostra a infraestrutura física ou virtual onde os componentes são implantados e executados.',
        arquivo_diagrama: 'diagrama-implantacao.drawio',
        sections: [
            {
                title: 'Sobre o Diagrama de Implantação',
                paragrafos: [
                    {
                        text: 'Este diagrama mostra a topologia de execução do sistema: quais nós (servidores, VMs, contêineres, dispositivos, etc.) existem, como se conectam e quais artefatos de software (executáveis, scripts, etc.) são implantados em cada nó. Ele documenta a visão física/lógica de runtime da arquitetura.'
                    }
                ]
            },
            {
                title: '1º Nodo: Browser / Navegador',
                paragrafos: [
                    {
                        text: 'O NextJS é um framework full-stack. Por esse motivo, uma grande parte dele é executado client-side (front-end). É aqui que os hooks do React poderão ser utilizados. O Browser recebe as páginas ao longo da navegação e fica responsável por:',
                        list: [
                            'Controlar States.',
                            'Gerenciar Contextos.',
                            'Enviar dados ao servidor.',
                            'Organizar o fluxo da navegação.'
                        ]
                    }
                ]
            },
            {
                title: '2º Nodo: Vercel',
                paragrafos: [
                    {
                        text: 'Em contrapartida, a outra parte do framework é executada server-side (back-end). Esta seção roda nos servidores da Vercel, que ficam responsáveis pela:',
                        list: [
                            'SSR (Server-Side-Rendering) de componentes.',
                            'Execução de server actions (chamadas de servidor para inclusão, edição, etc).',
                            'Comunicação com o banco de dados.',
                            'Autenticação.',
                            'Comunicação com os buckets S3.',
                            'Comunicação com APIs externas (principalmente seguradoras).',
                            'As variáveis de ambiente ficam aqui também!'
                        ]
                    }
                ]
            },
            {
                title: '3º Nodo: Supabase',
                paragrafos: [
                    {
                        text: 'O Supabase é uma plataforma "open source" que, apesar de poder operar como Backend As A Service (auth, APIs/realtime, Edge Functions e Storage), é utilizada pelo nosso sistema somente como provedor gerenciado de PostgreSQL e armazenamento de objetos S3. Com isso, toda a lógica de negócio se mantém no backend e o Supabase atua como abstração da camada de dados. Em resumo, trata-se do serviço responsável pelo:',
                        list: [
                            'Banco de dados.',
                            'File Storage.'
                        ]
                    }
                ]
            },
            {
                title: '4º Nodo: Seguradoras',
                paragrafos: [
                    {
                        text: 'Este nodo abstrái a implantação de todas as APIs das seguradoras parceiras (Porto, Tokio, Too e Pottencial), representando-as dentro de uma caixa preta. Aqui temos APIs RESTful, que fornecem:',
                        list: [
                            'Fluxos de autenticação.',
                            'Rotas de cálculo (incêndio), análise (fiança).',
                            'Download de documentos.',
                            'Rotas de contratação de seguros e garantias.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'componentes',
        titulo: 'Diagrama de Componentes',
        descricao: 'Mostra os componentes/serviços executáveis de software e suas interfaces/dependências.',
        arquivo_diagrama: 'diagrama-componentes.drawio',
        sections: []
    },
    {
        id: 'pacotes',
        titulo: 'Diagrama de Pacotes',
        descricao: 'Mostra a organização lógica dos módulos do sistema.',
        arquivo_diagrama: 'diagrama-pacotes.drawio',
        sections: []
    },
]