type Processos = {
    id: string
    titulo: string
    descricao: string
    arquivo_bpmn: string
    casos_de_uso: []
}[]

type Arquitetura = {
    id: string
    titulo: string
    descricao: string
    arquivo_diagrama: string
}[]

type DocsSkeleton = {
    processos: Processos
    arquitetura: Arquitetura
}

export const docs_skeleton: DocsSkeleton = {
    processos: [
        {
            id: 'seguro-incendio',
            titulo: 'Seguro Incêndio',
            descricao: '',
            arquivo_bpmn: 'seguro-incendio.bpmn',
            casos_de_uso: [

            ]
        },
        {
            id: 'seguro-fianca',
            titulo: 'Seguro Fiança',
            descricao: '',
            arquivo_bpmn: 'seguro-fianca.bpmn',
            casos_de_uso: [

            ]
        },
        {
            id: 'titulo-capitalizacao',
            titulo: 'Título de Capitalização',
            descricao: '',
            arquivo_bpmn: 'titulo-capitalizacao.bpmn',
            casos_de_uso: [

            ]
        }
    ],
    arquitetura: [
        {
            id: 'implantacao',
            titulo: 'Diagrama de Implantação',
            descricao: '',
            arquivo_diagrama: ''
        },
    ]
}


