type ServicosEAssinaturas = {
  titulo: string
  link: string
  descricao: string
  usuario?: string
  senha?: string
}[]

export const servicos_e_assinaturas: ServicosEAssinaturas = [
  {
    titulo: 'registro.br',
    link: 'https://registro.br/login/',
    descricao:
      'Serviço oficial de registro de domínios .br: permite pesquisar, registrar, renovar e gerenciar nomes de domínio, além de configurar DNS e dados do titular.',
  },
  {
    titulo: 'Google Workspace',
    link: 'https://workspace.google.com/intl/pt-BR/',
    descricao:
      'Conjunto de ferramentas de produtividade e colaboração (Gmail, Drive, Docs, Calendar): oferece e‑mail corporativo, armazenamento na nuvem, edição colaborativa e gestão de usuários e políticas de segurança.',
  },
  {
    titulo: 'Focus',
    link: 'https://app-v2.focusnfe.com.br/auth/login',
    descricao:
      'Plataforma de gestão fiscal para emissão de notas eletrônicas (NF-e/NFS-e): gera, assina e transmite documentos fiscais, integra com sistemas contábeis e ajuda no cumprimento de obrigações legais.',
  },
]
