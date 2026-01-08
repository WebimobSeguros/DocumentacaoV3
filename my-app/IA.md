- Guia de busca (pesquisar qualquer coisa da plataforna, como por exemplo onde esta alguma funcionalidade, guia para novos funcionario, apresentar a plataforma ) 

- Identificar erros (IA mostrar o que se refere tal erro, se é possivel contornar)

- Sugestoes de autocompletar

- Abrir uma aba nova com uma IA para consultar duvidas sobre a aplicação ou navegção

- Verificação de arquivo com IA, para ver se o arquivo esta compativel com oque esta sendo pedido de anexo

- Colocar um contexto de erros geral para que a IA consiga identificar o erro e retornar ao usuario

- Consultar a API do chatGPT para gerar resumo de relatorios ou uma analise de como foram os relatorios

# modelos/agentes: 
* gpt 4o ou gpt4o mini com SDK AI da Vercel

* opção secundaria: botpress (provavelmente não vamos usar, mas é uma opção viavel e personalizavel)

* opção tercearia: n8n (pouco viavel, plataforma mais de automação)

## custos:

4o: 25$-75$ por mes geralmente em torno de 4m de tokens (10x mais caro que o 4o mini)
4o mini: 5$-15$ por mes geralmente em torno de 4m de tokens

# implementação: 

* #### verificar SDKS da Vercel para entender como funciona a implementação
* #### sanitização de dados para nao expor dados sensiveis
* #### camada de segurança robusta
* #### validação de usuarios e limite de requisoções por usuario
* #### implementação primeiramente para alguns usuarios Webimob
* #### pesquisar como treinar a LLM para ter respostas mais acuradas com menos requisições











