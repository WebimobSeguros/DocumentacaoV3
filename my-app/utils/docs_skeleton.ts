import { processos, type Processos } from './skeleton-parts/processos'
import { arquitetura, type Arquitetura } from './skeleton-parts/arquitetura'

type Dados = {
  titulo: string
  descricao: string
  arquivo_diagrama: string
  sections: {
    title: string
    paragrafos: {
      text: string
      list?: string[]
    }[]
  }[]
}

type DocsSkeleton = {
  processos: Processos
  arquitetura: Arquitetura
  dados: Dados
}

export const docs_skeleton: DocsSkeleton = {
  processos: processos,
  arquitetura: arquitetura,
  dados: {
    titulo: 'Diagrama de Entidades e Relacionamentos',
    descricao: 'Definição de tabelas atributos e relações.',
    arquivo_diagrama: '',
    sections: [
      {
        title: 'Introdução ao Banco da Webimob',
        paragrafos: [
          {
            text: 'O banco de dados da Webimob utiliza PostgreSQL e possui três tabelas principais: [imobiliarias], [produtos] e [usuarios].',
          },
        ],
      },
      {
        title: 'Imobiliárias',
        paragrafos: [
          {
            text: 'Centraliza as informações das imobiliárias e serve como base para outras tabelas do sistema, possui relação de um para muitos com [usuarios] e [produtos]. A tabela [imobiliarias] desempenha um papel essencial, pois toda a produção parte de uma imobiliária. Cada uma tem sua carteira de cotações, propostas e contratações. ',
          },
          {
            text: 'Tabelas complementares: ',
            list: ['[logs_imobiliarias]'],
          },
        ],
      },
      {
        title: 'Usuários',
        paragrafos: [
          {
            text: 'A tabela [usuarios] possui uma chave estrangeira de [imobiliarias], nela estão armazenados os dados dos usuários. ',
          },
          {
            text: 'Tabelas complementares: ',
            list: [
              'Permissões: [usuarios] possui uma ligação de um para um com a tabela [permissoes], que define o que o usuário tem pode acessar ou realizar no sistema',
              'Notificações verificadas: [usuarios] possui uma ligação de um para muitos com [notificacoes_verificadas], tabela que mantém o controle das notificações que o usuário já viu/verificou.',
              '[logs_usuarios]',
            ],
          },
        ],
      },
      {
        title: 'Produtos',
        paragrafos: [
          {
            text: 'A tabela [produtos] registra os principais produtos oferecidos pela Webimob, incluindo seguro incêndio, seguro fiança e título de capitalização, e se conecta a diversas tabelas auxiliares que detalham solicitações, atividades e histórico de cada produto, como [solicitacao_cancelamento], [solicitacao_abertura_sinistro], [parcelas], [inquilinos_adicionais], [logs_produtos], [solicitacoes_resgate], [atividades_produtos] e [anexos_produtos].',
          },
          {
            text: 'Além disso, a tabela [produtos] possui os campos `pretendente_id` e `proprietario_id`, que se vinculam ao `id` da tabela [clientes] para definir o papel dos envolvidos no contrato de locação, e `imoveis_id`, que se conecta ao `id` da tabela [imoveis] para associar cada produto ao imóvel correspondente.',
          },
          {
            text: 'Tabelas complementares:',
            list: [
              '[logs_produtos]',
              '[anexos_produtos]',
              '[atividades_produtos]',
              '[parcelas]',
              '[inquilinos_adicionais]',
            ],
          },
        ],
      },
      {
        title: 'Solicitações',
        paragrafos: [
          {
            text: 'As tabelas de solicitações são vinculadas diretamente à tabela [produtos]. As tabelas [solicitacoes_abertura_sinistro] e [solicitacoes_resgate] possuem ligação de um para muitos com [produtos],  enquanto a tabela [solicitacoes_cancelamento] possui relação de um para um.',
          },
          {
            text: 'Solicitações de abertura de sinistro, que tem relação com:',
            list: [
              '[atividades_solicitacoes_abertura_sinistro]',
              '[anexos_solicitacoes_abertura_sinistro]',
              '[pagamentos_solicitacoes_abertura_sinistro]',
              '[log_solicitacoes_abertura_sinistro]',
            ],
          },
          {
            text: 'Solicitações de cancelamento, que tem relação com:',
            list: [
              '[atividades_solicitacoes_cancelamento]',
              '[anexos_solicitacoes_cancelamento]',
              '[log_solicitacoes_cancelamento]',
            ],
          },
          {
            text: 'Solicitações de resgate, que tem relação com:',
            list: [
              '[pagamentos_solicitacoes_resgate]',
              '[anexos_solicitacoes_resgate]',
              '[log_solicitacoes_resgate]',
            ],
          },
        ],
      },
      {
        title: 'Tabelas avulsas',
        paragrafos: [
          {
            text: '[consultas_cpf_cnpj]: Usada para gravar buscar de CPF e CNPJ, para reutilização futura.',
          },
        ],
      },
    ],
  },
}
