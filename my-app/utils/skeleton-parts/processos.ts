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
    descricao:
      'Desde a criação da cotação, até o calculo, contratação e emissão da apólice.',
    arquivo_bpmn: 'seguro-incendio.bpmn',
    arquivo_casos_de_uso: 'UC-seguro-incendio.drawio',
    regras_de_negocio: [
      'Uma cotação de Seguro Incêndio deve estar vinculada a exatamente uma seguradora sendo ela Porto Seguro ou Tokio Marine.',
      'Dados obrigatórios devem ser preenchidos antes de solicitar o cálculo da cotação (segurado, imóvel, pretendente).',
      'O orçamento só pode ser emitido se todos os dados obrigatórios estiverem salvos corretamente.',
      'Caso os dados estejam incorretos, é necessário corrigir e reenviar o formulário antes de prosseguir.',
      'A opção de pagamento precisa ser definida antes da contratação do seguro.',
      'A proposta só é considerada válida após o envio do código da proposta e atualização do status.',
      'O sistema deve verificar periodicamente o status da proposta via cron job.',
      'Se a apólice não for devolvida (ex.: falta de pagamento), o status permanece como emitido; caso contrário, deve ser atualizado para devolvido.',
      'O orçamento pode ser excluído automaticamente do banco da Webimob quando estiver com status "não calculado".'
    ],

    requisitos_funcionais: [
      'O sistema deve impedir a execução do cálculo e atualização caso algum campo obrigatório do formulário não esteja preenchido.',
      'O usuário deve poder vincular Imobiliária para cadastrar cotação.',
      'O usuário deve poder calcular a cotação.',
      'O usuário deve poder dar baixa na cotação.',
      'O usuário deve poder forçar a contratação.',
      'O usuário deve poder selecionar a opção de pagamento.',
      'O usuário deve poder realizar a contratação do seguro incêndio preenchendo os dados remanescentes do proprietário.',
      'Para calcular, são necessários apenas os dados do pretendente e do imóvel.',
      'Para contratar, são necessários os dados do proprietário.',
      'O sistema deve cadastrar a cotação com status "não calculado".',
      'O sistema deve alterar o status para "calculado" quando houver uma nova solicitação de orçamento do seguro incêndio.',
      'O sistema deve alterar o status para "Aguardando Apólice" após a contratação ser solicitada.',
      'A atualização do status deve ser realizada automaticamente a partir do cron job.',
      'Após a verificação do cron job, se a proposta estiver emitida, o sistema deve atualizar o status para "Emitido".',
      'O sistema deve alterar o status para "Não calculado" quando houver uma alteração nos dados durante o status "Calculado"',
    ],
  },
  {
    id: 'seguro-fianca',
    titulo: 'Contratação de Seguro Fiança',
    descricao:
      'Desde a criação da cotação, até a análise de crédito, solicitação de contratação e emissão da apólice.',
    arquivo_bpmn: 'seguro-fianca.bpmn',
    arquivo_casos_de_uso: '',
    regras_de_negocio: [],
    requisitos_funcionais: [
      'O sistema deve impedir a execução do cálculo e atualização caso algum campo obrigatório do formulário não esteja preenchido.',
      'O usuário deve poder vincular Imobiliária para cadastrar cotação.',
      'O usuário deve poder analisar a cotação.',
      'O usuário deve poder dar baixa na cotação.',
      'O usuário deve poder forçar a contratação.',
      'O usuário deve poder selecionar a opção de pagamento.',
      'O usuário deve poder realizar a contratação do seguro fiança preenchendo os dados remanescentes do proprietário.',
      'Para analisar, são necessários apenas os dados do pretendente.',
      'Para contratar, são necessários os dados do proprietário.',
      'O sistema deve cadastrar a cotação com status "não analisado".',
      'O sistema deve alterar o status para "analisado" quando houver uma nova solicitação de orçamento do seguro fiança.',
      'A atualização do status deve ser realizada automaticamente a partir do cron job.',
      'Após a verificação do cron job, se a proposta estiver emitida, o sistema deve atualizar o status para "Emitido".',
      'O sistema deve alterar o status para "Não calculado" quando houver uma alteração nos dados durante o status "Calculado"',
    ],
  },
  {
    id: 'titulo-capitalizacao',
    titulo: 'Contratação de Título de Capitalização',
    descricao:
      'Desde do preenchimento dos dados, até o envio da proposta e emissão do título.',
    arquivo_bpmn: 'titulo-capitalizacao.bpmn',
    arquivo_casos_de_uso: '',
    regras_de_negocio: [],
    requisitos_funcionais: [
      'O sistema deve impedir a execução do cálculo caso algum campo obrigatório do formulário não esteja preenchido.',
      'O usuário deve poder selecionar o tipo de imóvel (residencial ou comercial) e a imobiliaria.',
      'O usuário deve poder selecionar se é uma renovação.',
      '',
    ],
  },
  {
    id: 'sinistros',
    titulo: 'Solicitação de Abertura de Sinistros',
    descricao:
      'Envolve a solicitação pela imobiliária, o acompanhamento do setor operacional e a liquidação do pedido.',
    arquivo_bpmn: 'solicitacao-abertura-sinistro-seguro.bpmn',
    arquivo_casos_de_uso: '',
    regras_de_negocio: [],
    requisitos_funcionais: [
      'O usuário deve poder consultar a lista de sinistros.',
      'O usuário deve poder filtrar a consulta de sinistros.',
      '',
    ],
  },
  {
    id: 'resgates',
    titulo: 'Solicitação de Resgates',
    descricao:
      'Envolve a solicitação pela imobiliária, o acompanhamento do setor operacional e a liquidação do pedido.',
    arquivo_bpmn: 'solicitacao-resgate-cap.bpmn',
    arquivo_casos_de_uso: '',
    regras_de_negocio: [],
    requisitos_funcionais: [],
  },
  {
    id: 'cancelamentos',
    titulo: 'Solicitação de Cancelamentos',
    descricao:
      'Envolve a solicitação pela imobiliária, o acompanhamento do setor operacional e a efetivação do cancelamento.',
    arquivo_bpmn: 'solicitacao-cancelamento-seguro.bpmn',
    arquivo_casos_de_uso: '',
    regras_de_negocio: [],
    requisitos_funcionais: [],
  },
]
