export type Arquitetura = {
  id: string
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
}[]

export const arquitetura: Arquitetura = [
  {
    id: "implantacao",
    titulo: "Diagrama de Implantação",
    descricao:
      "Mostra a infraestrutura física ou virtual onde os componentes são implantados e executados.",
    arquivo_diagrama: "diagrama-implantacao.drawio",
    sections: [
      {
        title: "Sobre o Diagrama de Implantação",
        paragrafos: [
          {
            text: "Este diagrama mostra a topologia de execução do sistema: quais nós (servidores, VMs, contêineres, dispositivos, etc.) existem, como se conectam e quais artefatos de software (executáveis, scripts, etc.) são implantados em cada nó. Ele documenta a visão física/lógica de runtime da arquitetura.",
          },
        ],
      },
      {
        title: "1º Nodo: Browser / Navegador",
        paragrafos: [
          {
            text: "O NextJS é um framework full-stack. Por esse motivo, uma grande parte dele é executado client-side (front-end). É aqui que os hooks do React poderão ser utilizados. O Browser recebe as páginas ao longo da navegação e fica responsável por:",
            list: [
              "Controlar States.",
              "Gerenciar Contextos.",
              "Enviar dados ao servidor.",
              "Organizar o fluxo da navegação.",
            ],
          },
        ],
      },
      {
        title: "2º Nodo: Vercel",
        paragrafos: [
          {
            text: "Em contrapartida, a outra parte do framework é executada server-side (back-end). Esta seção roda nos servidores da Vercel, que ficam responsáveis pela:",
            list: [
              "SSR (Server-Side-Rendering) de componentes.",
              "Execução de server actions (chamadas de servidor para inclusão, edição, etc).",
              "Comunicação com o banco de dados.",
              "Autenticação.",
              "Comunicação com os buckets S3.",
              "Comunicação com APIs externas (principalmente seguradoras).",
              "As variáveis de ambiente ficam aqui também!",
            ],
          },
        ],
      },
      {
        title: "3º Nodo: Supabase",
        paragrafos: [
          {
            text: 'O Supabase é uma plataforma "open source" que, apesar de poder operar como Backend As A Service (auth, APIs/realtime, Edge Functions e Storage), é utilizada pelo nosso sistema somente como provedor gerenciado de PostgreSQL e armazenamento de objetos S3. Com isso, toda a lógica de negócio se mantém no backend e o Supabase atua como abstração da camada de dados. Em resumo, trata-se do serviço responsável pelo:',
            list: ["Banco de dados.", "File Storage."],
          },
        ],
      },
      {
        title: "4º Nodo: Seguradoras",
        paragrafos: [
          {
            text: "Este nodo abstrái a implantação de todas as APIs das seguradoras parceiras (Porto, Tokio, Too e Pottencial), representando-as dentro de uma caixa preta. Aqui temos APIs RESTful, que fornecem:",
            list: [
              "Fluxos de autenticação.",
              "Rotas de cálculo (incêndio), análise (fiança).",
              "Download de documentos.",
              "Rotas de contratação de seguros e garantias.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "componentes",
    titulo: "Diagrama de Componentes",
    descricao:
      "Mostra os componentes/serviços executáveis de software e suas interfaces/dependências.",
    arquivo_diagrama: "diagrama-componentes.drawio",
    sections: [
      {
        title: "Sobre o Diagrama de Componentes",
        paragrafos: [
          {
            text: "Este diagrama mostra a organização e as dependências entre os principais módulos de software do sistema. Ele representa a visão lógica da arquitetura, destacando os componentes internos do Next.js (Client Components, Server Components e Server Actions) e como estes se relacionam com os serviços externos, como PostgreSQL, S3 e Seguradoras. O diagrama evidencia a separação de responsabilidades entre as camadas e a forma como os componentes colaboram para a execução das funcionalidades do sistema.",
          },
        ],
      },
      {
        title: "NextJS",
        paragrafos: [
          {
            text: "O NextJS é um framework full-stack. Ele funciona de forma híbrida, ou seja, parte do código é executado no navegador (client-side) e parte no servidor (server-side). O NextJS é responsável por:",
            list: [
              "Renderizar páginas dinamicamente (SSR – Server-Side Rendering)",
              "Orquestrar as server actions (operações no servidor, como inserir/atualizar dados).",
              "Fazer a comunicação direta com o PostgreSQL e com o S3.",
              "Tratar autenticação, middlewares e integração com APIs externas (seguradoras).",
            ],
          },
        ],
      },
      {
        title: "PostgreSQL",
        paragrafos: [
          {
            text: "O PostgreSQL é um sistema de gerenciamento de banco de dados relacional. Ele segue o modelo tradicional de tabelas, colunas e chaves para organizar dados estruturados, permitindo a execução de consultas em SQL. No sistema, ele é usado para armazenar e manipular informações de forma consistente. Isso inclui:",
            list: [
              "Armazenamento estruturado de informações",
              "Segurança com papéis, permissões.",
              "Integração direta com o backend em Next.js através de queries e ORMs (Drizzle).",
            ],
          },
        ],
      },
      {
        title: "S3",
        paragrafos: [
          {
            text: "O S3 (Simple Storage Service) é um serviço de armazenamento em nuvem que permite guardar e recuperar arquivos de forma escalável e segura. No sistema, ele é usado para armazenar documentos, imagens ou outros tipos de arquivos. O S3 funciona como um repositório de objetos, cada um identificado por uma chave única dentro de um bucket. Isso inclui:",
            list:[
              "Armazenamento de arquivos estáticos (documentos, imagens, PDFs, relatórios).",
              "Alta disponibilidade e escalabilidade, permitindo lidar com grandes volumes de dados.",
              "Controle de acesso e segurança, com permissões definidas por políticas de usuários e serviços.",
              "Integração direta com o backend em Next.js, permitindo upload, download e gerenciamento de arquivos por meio de SDKs.",
            ]
          },
        ],
      },
      {
        title: "Seguradoras",
        paragrafos: [
          {
            text: "Abstração de todas as APIs das seguradoras parceiras.",
            list: ['Cálculos', 'Análises', 'Contratação', 'Download de documentos', 'Autenticação']
          },
        ],
      },
    ],
  },
  {
    id: "pacotes",
    titulo: "Diagrama de Pacotes",
    descricao: "Mostra a organização lógica dos módulos do sistema.",
    arquivo_diagrama: "diagrama-pacotes.drawio",
    sections: [
      {
        title: "Sobre o Diagrama de Pacotes",
        paragrafos: [
          {
            text: "Este diagrama mostra a organização lógica do código-fonte do sistema em pacotes, evidenciando como os arquivos e módulos estão estruturados dentro da aplicação. Ele representa a visão modular do software, agrupando elementos com responsabilidades semelhantes e facilitando a compreensão da arquitetura interna. No diagrama, é possível identificar os seguintes pacotes:",
          },
        ],
      },
      {
        title: "Public",
        paragrafos: [
          {
            text: "Contém recursos públicos acessíveis diretamente, como arquivos estáticos, imagens e outros assets acessados client-side.",
          },
        ],
      },
      {
        title: "Validation",
        paragrafos: [
          {
            text: "Responsável pela validação de dados e formulários, garantindo consistência e segurança antes de processamentos ou armazenamentos.",
          },
        ],
      },
      {
        title: "DB",
        paragrafos: [
          {
            text: "Define a modelagem do Banco de Dados a partir de arquivos de schema, que possibilitam:",
            list: [
              "Criação de migrations",
              "Sincronização com Banco de Dados",
              "Montagem de queries",
            ],
          },
        ],
      },
      {
        title: "Helpers",
        paragrafos: [
          {
            text: "Reúne funções utilizadas para chamadas de serviços externos. Dentro dele há ainda um subpacote específico para Seguradoras, responsável por montar a integração com esse domínio externo.",
          },
        ],
      },
      {
        title: "Utils",
        paragrafos: [
          {
            text: "Concentra utilitários genéricos que podem ser usados em diferentes camadas, como formatações, cálculos ou funções auxiliares de propósito amplo.",
          },
        ],
      },
      {
        title: "Drizzle",
        paragrafos: [
          {
            text: "Pasta responsavel por armazenar as migrations do Banco de Dados.",
          },
        ],
      },
      {
        title: "Components",
        paragrafos: [
          {
            text: "Nesta pasta, são armazenados os componentes visuais customizaveis do shadcn.",
          },
        ],
      },
      {
        title: "App",
        paragrafos: [
          {
            text: "Núcleo da aplicação, onde estão definidos os fluxos principais, rotas, páginas, layouts, componentes e submódulos. No primeiro nível temos: ",
            list:[
              "Pasta (auth): Armazena todas as páginas e rotas protegidas.",
              "Pasta crons: Armazena rotas que definem tarefas agendadas.",
            ]
          },
          {
            text:"Partindo do pressuposto que as pastas e arquivos incluídos dentro da pasta 'app' definem o roteamento da aplicação, tanto o primeiro nível quanto qualquer subpasta aninhada, respeitará o seguinte padrão:",
            list:[
              "Arquivos page.tsx: definem a página da rota em que estão definidos.",
              "Arquivos layout: definem o layout que engloba todos as rotas aninhadas.",
              "Pastas components: agrupam client components pertencentes ao escopo da pasta em que estão definidos.",
              "Pastas actions: criadas dentro das pastas components, para agrupar server actions pertencentes ao escopo da pasta em que estão definidos.",
              "Pastas [token]: definem rotas dinâmicas na URL da aplicação.",
            ],
          },
        ],
  
        
      },
    ],
  },
]
