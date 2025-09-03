type Processos = {
    id: string
    titulo: string
    descricao: string
    arquivo_bpmn: string
    arquivo_casos_de_uso: string
    regras_de_negocio: string[]
    atores: {
        nome_ator: string,
        casos_de_uso: {
            titulo: string,
            requisitos_funcionais: string[]
        }[]
    }[]
}[]

type Arquitetura = {
    id: string
    titulo: string
    descricao: string
    arquivo_diagrama: string
}[]

type Dados = {
    titulo: string
    descricao: string
    arquivo_diagrama: string
}

type DocsSkeleton = {
    processos: Processos
    arquitetura: Arquitetura
    dados: Dados
}

export const docs_skeleton: DocsSkeleton = {
    processos: [
        {
            id: 'seguro-incendio',
            titulo: 'Contratação de Seguro Incêndio',
            descricao: 'Desde a criação da cotação, até o calculo, contratação e emissão da apólice.',
            arquivo_bpmn: 'seguro-incendio.bpmn',
            arquivo_casos_de_uso: 'UC-seguro-incendio.drawio',
            regras_de_negocio: [
                'Uma cotação de Seguro Incêndio deve estar vinculada a exatamente uma seguradora sendo ela Porto Seguro ou Tokio Marine.',
            ],
            atores: [
                {
                    nome_ator: 'Usuário Imob / Webimob',
                    casos_de_uso: [{
                        titulo: 'Calcular Orçamento',
                        requisitos_funcionais: [
                            'O sistema deve impedir a execução do cálculo caso algum campo obrigatório do formulário não esteja preenchido.'
                        ]
                    }]
                },
                {
                    nome_ator: 'Usuário Imob',
                    casos_de_uso: [{
                        titulo: 'Calcular Orçamento',
                        requisitos_funcionais: [
                            'O sistema deve impedir a execução do cálculo caso algum campo obrigatório do formulário não esteja preenchido.'
                        ]
                    }]
                },
                {
                    nome_ator: 'Usuário Webimob',
                    casos_de_uso: [{
                        titulo: 'Calcular Orçamento',
                        requisitos_funcionais: [
                            'O sistema deve impedir a execução do cálculo caso algum campo obrigatório do formulário não esteja preenchido.'
                        ]
                    }]
                },
            ]
        },
        {
            id: 'seguro-fianca',
            titulo: 'Contratação de Seguro Fiança',
            descricao: 'Desde a criação da cotação, até a análise de crédito, solicitação de contratação e emissão da apólice.',
            arquivo_bpmn: 'seguro-fianca.bpmn',
            arquivo_casos_de_uso: '',
            regras_de_negocio: [],
            atores: [
                {
                    nome_ator: '',
                    casos_de_uso: [{
                        titulo: '',
                        requisitos_funcionais: []
                    }]
                }
            ]
        },
        {
            id: 'titulo-capitalizacao',
            titulo: 'Contratação de Título de Capitalização',
            descricao: 'Desde do preenchimento dos dados, até o envio da proposta e emissão do título.',
            arquivo_bpmn: 'titulo-capitalizacao.bpmn',
            arquivo_casos_de_uso: '',
            regras_de_negocio: [],
            atores: [
                {
                    nome_ator: '',
                    casos_de_uso: [{
                        titulo: '',
                        requisitos_funcionais: []
                    }]
                }
            ]
        },
        {
            id: 'sinistros',
            titulo: 'Solicitação de Abertura de Sinistros',
            descricao: 'Envolve a solicitação pela imobiliária, o acompanhamento do setor operacional e a liquidação do pedido.',
            arquivo_bpmn: 'sinistros.bpmn',
            arquivo_casos_de_uso: '',
            regras_de_negocio: [],
            atores: [
                {
                    nome_ator: '',
                    casos_de_uso: [{
                        titulo: '',
                        requisitos_funcionais: []
                    }]
                }
            ]
        },
        {
            id: 'resgates',
            titulo: 'Resgates de Resgates',
            descricao: 'Envolve a solicitação pela imobiliária, o acompanhamento do setor operacional e a liquidação do pedido.',
            arquivo_bpmn: 'resgates.bpmn',
            arquivo_casos_de_uso: '',
            regras_de_negocio: [],
            atores: [
                {
                    nome_ator: '',
                    casos_de_uso: [{
                        titulo: '',
                        requisitos_funcionais: []
                    }]
                }
            ]
        },
        {
            id: 'cancelamentos',
            titulo: 'Solicitação de Cancelamentos',
            descricao: 'Envolve a solicitação pela imobiliária, o acompanhamento do setor operacional e a efetivação do cancelamento.',
            arquivo_bpmn: 'cancelamentos.bpmn',
            arquivo_casos_de_uso: '',
            regras_de_negocio: [],
            atores: [
                {
                    nome_ator: '',
                    casos_de_uso: [{
                        titulo: '',
                        requisitos_funcionais: []
                    }]
                }
            ]
        },
    ],
    arquitetura: [
        {
            id: 'implantacao',
            titulo: 'Diagrama de Implantação',
            descricao: 'Mostra a infraestrutura física ou virtual onde os componentes são implantados e executados.',
            arquivo_diagrama: 'diagrama-implantacao.drawio'
        },
        {
            id: 'componentes',
            titulo: 'Diagrama de Componentes',
            descricao: 'Mostra os componentes/serviços executáveis de software e suas interfaces/dependências.',
            arquivo_diagrama: 'diagrama-componentes.drawio'
        },
        {
            id: 'pacotes',
            titulo: 'Diagrama de Pacotes',
            descricao: 'Mostra a organização lógica dos módulos do sistema.',
            arquivo_diagrama: 'diagrama-pacotes.drawio'
        },
    ],
    dados: {
        titulo: 'Diagrama de Entidades e Relacionamentos',
        descricao: 'Definição de tabelas atributos e relações.',
        arquivo_diagrama: ''
    }
}