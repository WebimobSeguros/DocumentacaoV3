export type Processos = {
    id: string
    titulo: string
    descricao: string
    arquivo_bpmn: string
    arquivo_casos_de_uso: string
    regras_de_negocio: string[]
    requisitos_funcionais: string[]
}[]

export const processos: Processos = [
    {
        id: 'seguro-incendio',
        titulo: 'Contratação de Seguro Incêndio',
        descricao: 'Desde a criação da cotação, até o calculo, contratação e emissão da apólice.',
        arquivo_bpmn: 'seguro-incendio.bpmn',
        arquivo_casos_de_uso: 'UC-seguro-incendio.drawio',
        regras_de_negocio: [
            'Uma cotação de Seguro Incêndio deve estar vinculada a exatamente uma seguradora sendo ela Porto Seguro ou Tokio Marine.',
        ],

        requisitos_funcionais: [
            'O sistema deve impedir a execução do cálculo caso algum campo obrigatório do formulário não esteja preenchido.'
        ]
    },
    {
        id: 'seguro-fianca',
        titulo: 'Contratação de Seguro Fiança',
        descricao: 'Desde a criação da cotação, até a análise de crédito, solicitação de contratação e emissão da apólice.',
        arquivo_bpmn: 'seguro-fianca.bpmn',
        arquivo_casos_de_uso: '',
        regras_de_negocio: [],
        requisitos_funcionais: []
    },
    {
        id: 'titulo-capitalizacao',
        titulo: 'Contratação de Título de Capitalização',
        descricao: 'Desde do preenchimento dos dados, até o envio da proposta e emissão do título.',
        arquivo_bpmn: 'titulo-capitalizacao.bpmn',
        arquivo_casos_de_uso: '',
        regras_de_negocio: [],
        requisitos_funcionais: []
    },
    {
        id: 'sinistros',
        titulo: 'Solicitação de Abertura de Sinistros',
        descricao: 'Envolve a solicitação pela imobiliária, o acompanhamento do setor operacional e a liquidação do pedido.',
        arquivo_bpmn: 'solicitacao-abertura-sinistro-seguro.bpmn',
        arquivo_casos_de_uso: '',
        regras_de_negocio: [],
        requisitos_funcionais: []
    },
    {
        id: 'resgates',
        titulo: 'Solicitação de Resgates',
        descricao: 'Envolve a solicitação pela imobiliária, o acompanhamento do setor operacional e a liquidação do pedido.',
        arquivo_bpmn: 'solicitacao-resgate-cap.bpmn',
        arquivo_casos_de_uso: '',
        regras_de_negocio: [],
        requisitos_funcionais: []
    },
    {
        id: 'cancelamentos',
        titulo: 'Solicitação de Cancelamentos',
        descricao: 'Envolve a solicitação pela imobiliária, o acompanhamento do setor operacional e a efetivação do cancelamento.',
        arquivo_bpmn: 'solicitacao-cancelamento-seguro.bpmn',
        arquivo_casos_de_uso: '',
        regras_de_negocio: [],
        requisitos_funcionais: []
    },
]
