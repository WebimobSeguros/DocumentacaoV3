type ContatosELink = {
    titulo: string,
    links: {
        titulo: string,
        link: string,
        usuario: string,
        senha: string,
        anotacoes: string,
    }[]
    contatos: {
        nome: string,
        setor: string,
        numero: string,
        email: string,
        anotacoes: string,
    }[]
}[]

export const contatos_e_links: ContatosELink = [
    {
        titulo: 'Porto Seguro',
        links: [
            {
                titulo: 'Acesso Portal Corretor',
                link: 'https://corretor.portoseguro.com.br/corretoronline',
                usuario: '758.523.656-53',
                senha: 'Web@2025',
                anotacoes: 'SUSEP: R4GK9J (P) / Senhas mudam com frequência. Consultar equipe comercial.',
            },
            {
                titulo: 'Acesso Portal Desenvolvedor',
                link: 'https://dev.portoseguro.com.br/api-portal/user/login',
                usuario: 'ti@webimob.com.br',
                senha: '48EG%+AuQ*n#T',
                anotacoes: 'Documentação (Incêndio e Fiança).',
            },
            {
                titulo: 'Documentação Cap',
                link: 'https://app.swaggerhub.com/apis-docs/lucas.martins2/riscos-financeiros_capitalizacao/1.0.0',
                usuario: 'Livre',
                senha: 'Livre',
                anotacoes: 'Documentação avulsa do título de capitalização.',
            }
        ],
        contatos: [
            {
                nome: 'Ellen Ingrid',
                setor: 'Comercial',
                numero: '+55 (31) 9322-0005',
                email: '---',
                anotacoes: 'Para emergências, chamados travados e dúvidas de produto.',
            },
            {
                nome: 'Abertura de chamados',
                setor: 'TI',
                numero: '---',
                email: '---',
                anotacoes: 'No Portal Dev. Para criação de chamados de TI.',
            }
        ]
    },
    {
        titulo: 'Pottencial',
        links: [
            {
                titulo: 'Acesso Portal Coretor',
                link: 'https://parceiro.pottencial.com.br/login/autenticacao',
                usuario: 'operacional@webimob.com.br',
                senha: 'Webimob@2025',
                anotacoes: 'Senhas mudam com frequência. Consultar equipe comercial.',
            },
            {
                titulo: 'Acesso Portal Desenvolvedor',
                link: 'https://developers.pottencial.com.br/api-portal/pt-br/content/fiancalocaticia',
                usuario: 'Livre',
                senha: 'Livre',
                anotacoes: 'Documentação (Fiança).',
            }
        ],
        contatos: [
            {
                nome: 'Central de TI',
                setor: 'TI',
                numero: '---',
                email: 'developers@pottencial.com.br',
                anotacoes: 'Pedidos',
            },
            {
                nome: 'Leandro Dourado',
                setor: 'TI',
                numero: '---',
                email: 'leandro.dourado@pottencial.com.br',
                anotacoes: 'Atendimento. Ele recomendou que o primeiro contato fosse feito com a Central.',
            }
        ]
    },
    // ## Tokio

    // | Titulo | Link | Usuário | Senha | Descrição |
    // | --- | --- | --- | --- | --- |
    // | Acesso Portal Corretor | [Link Portal](https://ssoportais3.tokiomarine.com.br/openam/XUI/?realm=TOKIOLFR&goto=http://portalparceiros.tokiomarine.com.br/#login/) | 04961798614 | Tokio@2025 | Senhas mudam com frequência. Consultar equipe comercial. |
    // | Acesso Portal Desenvolvedor | [Link Portal Dev](https://ssoportais3.tokiomarine.com.br/openam/XUI/?realm=TOKIOLFR&goto=http://portalparceiros.tokiomarine.com.br/#login/) | 13800975688 | @#$Tokio25 | Documentação (Incêndio e Fiança) |

    // | Nome Contato Seguradora | Setor | Número | E-mail | Descrição |
    // | --- | --- | --- | --- | --- |
    // | Rafael Araujo | TI | ... | rafael.filho@tokiomarine.com.br | Responsável pelas APIs de Incêndio e Fiança. |
    // | Larissa Silveira | Comercial | +55 (31) 9888-2400 | larissa.silveira@tokiomarine.com.br | Para emergências, chamados travados e dúvidas de produto. |
    // | Abertura de chamados | TI | ... | ... | No Portal Dev. Para criação de chamados de TI. |
    {
        titulo: 'Tokio Marine',
        links: [
            {
                titulo: '',
                link: '',
                usuario: '',
                senha: '',
                anotacoes: '',
            }
        ],
        contatos: [
            {
                nome: '',
                setor: '',
                numero: '',
                email: '',
                anotacoes: '',
            }
        ]
    },
    {
        titulo: 'Too Seguros',
        links: [
            {
                titulo: '',
                link: '',
                usuario: '',
                senha: '',
                anotacoes: '',
            }
        ],
        contatos: [
            {
                nome: '',
                setor: '',
                numero: '',
                email: '',
                anotacoes: '',
            }
        ]
    },
]
// ## Too

// | Titulo | Link | Usuário | Senha | Descrição |
// | --- | --- | --- | --- | --- |
// | Acesso Portal Coretor | [Link Portal](https://openapi-uat.tooseguros.com.br/keycloak/auth/realms/openid-backend-kube/protocol/openid-connect/auth?client_id=21a9fe739b33454f85df67f1f4559add&redirect_uri=https%3A%2F%2Fhml-portalparceiro.tooseguros.com.br%2Fsignin-callback&response_type=code&scope=openid+email+authorized_apps+profile&state=bd28a5a15634482caffb7eb46eabe265&code_challenge=gbCZPh3t6_KMdWdjOXakJpw4sfPsvQFaJeSprUtlmkA&code_challenge_method=S256) | 34156096000101 | @Webi2021 | Senhas mudam com frequência. Consultar equipe comercial. |
// | Acesso Portal Desenvolvedor | [Link Portal Dev](https://developers.tooseguros.com.br/documentacao/api-fianca-locaticia-regras-e-payloads-v2) | Livre | Livre | Documentação (Fiança) |
// | Acesso Portal Chamados | [Link Portal Chamados Dev](https://tooseguros.atlassian.net/servicedesk/customer/user/login) | ti@webimob.com.br | Ti@webimob2025 | ... |

// | Nome Contato Seguradora | Setor | Número | E-mail | Descrição |
// | --- | --- | --- | --- | --- |
// | Danielle Marques | Comercial | +55 (11) 9659-7579 | ... | Para emergências, chamados travados e dúvidas de produto. |
// | Abertura de chamados | TI | ... | ... | No Portal Chamados Dev. Para criação de chamados de TI. |