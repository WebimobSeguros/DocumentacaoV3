import { processos, type Processos } from "./skeleton-parts/processos"
import { arquitetura, type Arquitetura } from "./skeleton-parts/arquitetura"

type Dados = {
    titulo: string
    descricao: string
    arquivo_diagrama: string
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
    }
}