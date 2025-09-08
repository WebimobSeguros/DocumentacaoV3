import { processos, type Processos } from "./skeleton-parts/processos"
import { arquitetura, type Arquitetura } from "./skeleton-parts/arquitetura"

type Dados = {
    titulo: string
    descricao: string
    arquivo_diagrama: string;
    sections: {
        title: string;
        paragrafos: {
            text: string;
            list?: string[];
        }[];
    }[];
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
        sections: [{
            title: 'Explição das tabelas Webimob e relacionamentos',
            
            //TODO: fazer 3 seções explicativas do grupo de tabelas: 
            // primarias -> imob -> produtos -> imoveis/clientes
            // secundarias -> tabelas complementares a produtos -> logs/atividades/anexos
            // tercearias -> tabelas de solicitação, estão vinculadas a produtos mas tem tabelas consecutivas

            paragrafos: [{
                text: 'Explicação tabela produtos webimob: No banco da Webimob, a tabela principal é a {imobiliarias}, que centraliza as informações das imobiliárias e serve como base para outras tabelas do sistema, como {produtos} e {usuarios}. A tabela {produtos} registra os principais serviços oferecidos pela Webimob, incluindo seguro incêndio, seguro fiança e título de capitalização, e se conecta a diversas tabelas auxiliares que detalham solicitações, atividades e histórico de cada produto, como {solicitacao_cancelamento}, {solicitacao_abertura_sinistro}, {parcelas}, {inquilinos_adicionais}, {logs_produtos}, {solicitacoes_resgate} e {atividades_produtos}, sendo que esta última também se relaciona com {anexos_produtos}. Além disso, a tabela {produtos} possui os campos [pretendente_id] e [proprietario_id], que se vinculam ao [id] da tabela {clientes} para identificar quem abriu a solicitação do produto, e [imoveis_id], que se conecta ao [id] da tabela {imoveis} para associar cada produto ao imóvel correspondente, permitindo que todas as operações e registros sejam rastreados de forma organizada e consistente dentro do sistema.',
                list: [
                    "imobiliarias{ id } -> produtos{ imobiliaria_id }",
                    "imobiliarias{ id } -> usuarios{ imobiliaria_id }",
                    "produtos{ id } -> solicitacao_cancelamento{ produto_id }",
                    "produtos{ id } -> solicitacao_abertura_sinistro{ produto_id }",
                    "produtos{ id } -> parcelas{ produto_id }",
                    "produtos{ id } -> inquilinos_adicionais{ produto_id }",
                    "produtos{ id } -> logs_produtos{ produto_id }",
                    "produtos{ id } -> solicitacoes_resgate{ produto_id }",
                    "produtos{ id } -> atividades_produtos{ produto_id } -> anexos_produtos{ atividade_produto_id }",
                    "produtos[pretendente_id] -> clientes{ id }",
                    "produtos[proprietario_id] -> clientes{ id }",
                    "produtos[imoveis_id] -> imoveis{ id }",
                ],
            }]
        }]
    }
}