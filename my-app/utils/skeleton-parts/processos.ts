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
      'Desde a criação da cotação, até o cálculo, contratação e emissão da apólice.',
    arquivo_bpmn: 'seguro-incendio.bpmn',
    arquivo_casos_de_uso: 'UC-seguro-incendio.drawio',
    regras_de_negocio: [
      'Uma cotação de Seguro Incêndio deve estar vinculada a exatamente uma imobiliária.',
      'Uma cotação de Seguro Incêndio deve estar vinculada a exatamente uma seguradora sendo ela, Porto Seguro ou Tokio Marine.',
      'Para solicitar um orçamento é necessário recolher os dados obrigatórios do pretendente (inquilino) e do imóvel, além de informações básicas da cotação.',
      'O orçamento deve ser solicitado novamente após quaisquer alterações nos dados da cotação.',
      'Antes da contratação e emissão da proposta, uma forma de pagamento deve ser escolhida.',
      'Para prosseguir com a contratação é necessário recolher os dados obrigatórios do proprietário (locador).',
      'A apólice pode ser devolvida por falta de pagamento, ou por inconsistências cadastrais.',
      'Deve haver uma verificação periódica sobre o status da proposta (se virou apólice ou se foi devolvida).',
    ],

    requisitos_funcionais: [
      'O sistema deve exigir que o usuário vincule uma imobiliária para cadastrar a cotação.',
      'O sistema deve cadastrar a cotação com status "não calculado".',

      'O sistema deve impedir a solicitação do cálculo ou atualização da cotação caso algum campo obrigatório do formulário não esteja preenchido corretamente.',
      'Para calcular, o sistema deve exigir os dados do pretendente e do imóvel, além de informações básicas da cotação.',
      'O sistema deve permitir que o usuário solicite o cálculo da cotação, e aguarde um orçamento.',
      'O sistema deve alterar o status para "calculado" quando um orçamento for gerado com sucesso.',
      'O sistema deve permitir que o usuário dê baixa em uma cotação, caso haja a desistência da contratação.',
      'O sistema deve alterar o status para "Não calculado" e apagar o orçamento, quando houver uma alteração nos dados da cotação.',
      'O sistema deve permitir que o usuário selecione a opção de pagamento.',

      'O sistema deve permitir que o usuário realize a contratação do seguro incêndio preenchendo os dados restantes do proprietário.',
      'O sistema deve permitir que o usuário force a contratação, caso a contratação seja feita diretamente no portal da seguradora.',
      'O sistema deve alterar o status para "Aguardando Apólice", e a etapa para "Proposta" após a contratação ser concluída.',

      'O sistema deve implementar uma tarefa periódica automatizada (cron job), que verifica o andamento das propostas na seguradora, e atualiza o status para "emitido" (caso a apólice esteja disponível) ou "devolvido".',
    ],
  },
  {
    id: 'seguro-fianca',
    titulo: 'Contratação de Seguro Fiança',
    descricao:
      'Desde a criação da cotação, até a análise de crédito, solicitação de contratação e emissão da apólice.',
    arquivo_bpmn: 'seguro-fianca.bpmn',
    arquivo_casos_de_uso: '',
    regras_de_negocio: [
      'Uma cotação de Seguro Fiança deve estar vinculada a exatamente uma imobiliária.',
      'Uma cotação de Seguro Fiança deve solicitar análises em todas as seguradoras parceiras, paralelamente (Porto Seguro, Tokio Marine, Too e Pottencial).',
      'Para solicitar as análises é necessário recolher os dados obrigatórios do(s) pretendente(s) — inquilinos adicionais, se necessário —  e do imóvel, além de informações básicas da cotação.',
      'Diferentemente do Seguro Incêndio — que permite recalcular o orçamento dentro da mesma cotação — no Seguro Fiança, após a solicitação das análises (aprovações ou recusas), para reanalisar, é necessário criar uma nova cotação.',
      'Para contratar um Seguro Fiança, uma solicitação de contratação deve ser registrada, informando a seguradora desejada e o orçamento escolhido.',
      'Antes da solicitação de contratação, uma forma de pagamento deve ser escolhida.',
      'Após a contratação ser concluída no portal da seguradora escolhida, a cotação deve ser atualizada para apólice, contendo o número da apólice, dados do proprietário, prêmio e demais informações relevantes.',
    ],
    requisitos_funcionais: [
      'O sistema deve exigir que o usuário vincule uma imobiliária para cadastrar a cotação.',
      'O sistema deve cadastrar a cotação com status "não analisado".',

      'O sistema deve impedir a alteração dos dados da cotação ou solicitação das análises caso algum campo obrigatório do formulário não esteja preenchido corretamente.',
      'Para analisar, o sistema deve exigir os dados do(s) pretendente(s) e do imóvel, além de informações básicas da cotação.',
      'O sistema deve permitir que o usuário solicite as análises da cotação, e aguarde um orçamento (ou recusa) de cada seguradora.',
      'O sistema deve alterar o status para "analisado" quando pelo menos uma análise for concluída (aprovação ou recusa).',
      'O sistema deve permitir que o usuário dê baixa em uma cotação, caso haja a desistência da contratação ou caso nenhuma análise seja aprovada.',
      'Diferentemente do Seguro Incêndio, que excluí o orçamento e atualiza o status da cotação para "não calculado" se houver uma alteração nos dados da cotação, o sistema NÃO permite que cotações de Seguro Fiança sofram atualizações depois que o status vira "analisado".',
      'Para reanalisar, o sistema deve permitir a duplicação da cotação. A cotação duplicada deve ser criada com status "não analisado", sem nenhuma análise ou forma de pagamento salvos no banco de dados.',
      'O sistema deve permitir que o usuário selecione a opção de pagamento.',

      'O sistema deve permitir que o usuário registre uma solicitação de contratação, confirmando o valor do orçamento e a seguradora desejada. Além disso, deve-se anexar o arquivo do contrato de locação e o arquivo do orçamento.',
      'Durante a solicitação da contratação, o sistema deve exigir que usuários do tipo "Webimob" anexem um print de tela, com a confirmação do cliente da imobiliária',
      'O sistema deve permitir que um usuário do tipo "Webimob" (com as permissões adequadas), force a contratação da cotação, após o processo ser finalizado dentro do portal da seguradora escolhida.',
      'A feature "Forçar Contratação" transforma a cotação em apólice dentro do sistema, e deve exigir dados complementares como prêmio, comissão e dados do proprietário.',
    ],
  },
  {
    id: 'titulo-capitalizacao',
    titulo: 'Contratação de Título de Capitalização',
    descricao:
      'Desde o preenchimento dos dados, até o envio da proposta e emissão do título.',
    arquivo_bpmn: 'titulo-capitalizacao.bpmn',
    arquivo_casos_de_uso: '',
    regras_de_negocio: [
      'Uma proposta de Título de Capitalização deve estar vinculada a exatamente uma imobiliária.',
      'Uma proposta de Título de Capitalização deve estar vinculada apenas a Porto Seguro, já que é a única seguradora parceira que oferece esse produto.',
      'Para iniciar a contratação, uma modalidade de título deve ser escolhida (12, 15, 18 ou 30 meses).',
      'Para solicitar a geração da proposta é necessário recolher os dados obrigatórios do pretendente, do imóvel, do proprietário, além de informações básicas da proposta e da modalidade escolhida.',
      'Deve haver uma verificação periódica sobre o status da proposta (se foi emitido ou devolvido).',
    ],
    requisitos_funcionais: [
      'O sistema deve exigir que o usuário vincule uma imobiliária para cadastrar a proposta.',
      'O sistema deve cadastrar a proposta com status "em elaboração".',

      'O sistema deve impedir a alteração ou envio dos dados da proposta caso algum campo obrigatório do formulário não esteja preenchido corretamente.',
      'O sistema deve permitir que o usuário selecione uma modalidade de título (12, 15, 18 ou 30 meses).',
      'Para solicitar a geração da proposta na seguradora, o sistema deve exigir os dados do pretendente, do imóvel, e do proprietário, além das informações básicas da proposta e da modalidade escolhida.',
      'O sistema deve permitir que o usuário dê baixa em uma proposta "em elaboração", caso haja a desistência da contratação.',
      'O sistema deve permitir que o usuário solicite a geração da proposta na seguradora, e aguarde o código gerado.',
      'O sistema deve alterar o status para "pendente" quando a proposta for gerada com sucesso.',
      'O sistema deve permitir que o usuário force a contratação, caso a contratação seja feita diretamente no portal da seguradora.',
      'O sistema deve implementar uma tarefa periódica automatizada (cron job), que verifica o andamento das propostas na seguradora, e atualiza o status para "emitido" (caso o pagamento tenha sido realizado) ou "devolvido".',

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
    requisitos_funcionais: [],
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
