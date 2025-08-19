type DocsSkeleton = {
    identifier: string
    title: string
    descricao: string
    arquivo_bpmn: string
    casos_de_uso: []
}[]

export const docs_skeleton: DocsSkeleton = [
    {
        identifier: 'seguro-incendio',
        title: 'Seguro Incêndio',
        descricao: '',
        arquivo_bpmn: '/seguro-incendio.bpmn',
        casos_de_uso: [

        ]
    },
    {
        identifier: 'seguro-fianca',
        title: 'Seguro Fiança',
        descricao: '',
        arquivo_bpmn: '/seguro-fianca.bpmn',
        casos_de_uso: [

        ]
    },
    {
        identifier: 'titulo-capitalizacao',
        title: 'Título de Capitalização',
        descricao: '',
        arquivo_bpmn: '/titulo-capitalizacao.bpmn',
        casos_de_uso: [

        ]
    }
]