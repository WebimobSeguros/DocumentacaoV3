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
                email: 'ellen.ingrid@portoseguro.com.br',
                anotacoes: 'Para emergências, chamados travados e dúvidas de produto.',
            },
            {
                nome: 'Abertura de chamados',
                setor: 'TI',
                numero: '---',
                email: '---',
                anotacoes: 'No Portal Dev. Para criação de chamados de TI.',
            }, 
            {
                nome: 'Cristina Maciel',
                setor: 'Comercial',
                numero: '---',
                email:  'cristina.maciel@portoseguro.com.br',
                anotacoes: 'Para emergências, chamados travados e dúvidas de produto.',
            }, 
            {
                nome: 'Felipe Borges',
                setor: 'Comercial',
                numero: '---',
                email: 'felipe.borges@portoseguro.com.br',
                anotacoes: 'Para emergências, chamados travados e dúvidas de produto.',
            }
        ]
    },
    {
        titulo: 'Pottencial',
        links: [
            {
                titulo: 'Acesso Portal Corretor',
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
            },
            {
                titulo: 'Acesso Portal Chamados',
                link: 'https://app.pipefy.com/public/form/e1b8FX_d',
                usuario: 'Livre',
                senha: 'Livre',
                anotacoes: 'Chamados para demandas da TI',
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
                anotacoes: 'Atendimento. Recomenda-se que o primeiro contato seja feito na central.',
            }, 
            {
                nome: 'Anderson Vieira',
                setor: 'Gerente Comercial',
                numero: '---',
                email: 'anderson.vieira@pottencial.com.br',
                anotacoes: 'Atendimento. Recomenda-se que o primeiro contato seja feito na central.',
            }
        ]
    },
    {
        titulo: 'Too Seguros',
        links: [
            {
                titulo: 'Acesso Portal Corretor',
                link: 'https://openapi-uat.tooseguros.com.br/keycloak/auth/realms/openid-backend-kube/protocol/openid-connect/auth?client_id=21a9fe739b33454f85df67f1f4559add&redirect_uri=https%3A%2F%2Fhml-portalparceiro.tooseguros.com.br%2Fsignin-callback&response_type=code&scope=openid+email+authorized_apps+profile&state=bd28a5a15634482caffb7eb46eabe265&code_challenge=gbCZPh3t6_KMdWdjOXakJpw4sfPsvQFaJeSprUtlmkA&code_challenge_method=S256',
                usuario: '34156096000101',
                senha: '@Webi2021',
                anotacoes: 'Senhas mudam com frequência. Consultar equipe comercial.',
            },
            {
                titulo: 'Acesso Portal Desenvolvedor',
                link: 'https://developers.tooseguros.com.br/documentacao/api-fianca-locaticia-regras-e-payloads-v2',
                usuario: 'Livre',
                senha: 'Livre',
                anotacoes: 'Documentação (Fiança)',
            },
            
        ],
        contatos: [
            {
                nome: 'Danielle Marques',
                setor: 'Comercial',
                numero: '+55 (11) 9659-7579',
                email: '...',
                anotacoes: 'Para emergências, chamados travados e dúvidas de produto.',
            },
            {
                nome: 'Abertura de chamados',
                setor: 'TI',
                numero: '...',
                email: 'suporte.api.fianca@tooseguros.com.br',
                anotacoes: 'No Portal Chamados Dev. Para criação de chamados de TI.',
            },
        ]
    },
    {
        titulo: 'Tokio Marine',
        links: [
            {
                titulo: 'Acesso Portal Corretor',
                link: 'https://ssoportais3.tokiomarine.com.br/openam/XUI/?realm=TOKIOLFR&goto=http://portalparceiros.tokiomarine.com.br/#login/',
                usuario: '04961798614',
                senha: 'Tokio@2025',
                anotacoes: 'Senhas mudam com frequência. Consultar equipe comercial.',
            },
            {
                titulo: 'Acesso Portal Desenvolvedor',
                link: 'https://ssoportais3.tokiomarine.com.br/openam/XUI/?realm=TOKIOLFR&goto=http://portalparceiros.tokiomarine.com.br/#login/',
                usuario: '13800975688',
                senha: '@1Webimob',
                anotacoes: 'Documentação (Incêndio e Fiança)',
            },
        ],
        contatos: [
            {
                nome: 'Rafael Araujo',
                setor: 'TI',
                numero: '...',
                email: 'rafael.filho@tokiomarine.com.br',
                anotacoes: 'Responsável pelas APIs de Incêndio e Fiança.',
            },
            {
                nome: 'Larissa Silveira',
                setor: 'Comercial',
                numero: '+55 (31) 9888-2400',
                email: 'larissa.silveira@tokiomarine.com.br',
                anotacoes: 'Para emergências, chamados travados e dúvidas de produto.',
            },
            {
                nome: 'Abertura de chamados',
                setor: 'TI',
                numero: '',
                email: '',
                anotacoes: 'No Portal Dev. Para criação de chamados de TI.',
            },
        ]
    },
]