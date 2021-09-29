# desafio-e2e-integration

# Por que Jest e Supertest
- Facil implementação 
- Mesma linguagem em que vai ser o Backend e Front ganha o engajamento do time 
- Pode ficar no mesmo projeto que o codigo da aplicação facilitando a integração com o backend e execução na pipeline

# Requisito 
Gerenciador de pacotes NPM ou yarn e instação conforme passo a passo 

# Execução
Apos clonar o projeto na pasta INTEGRATION 
`yarn install`
`yarn test`

## Casos de Teste 

    ✓ Cadastro com sucesso -- OK 200 
    ✓ fullName -- Nome em branco -- OK 400 
    ✕ fullName -- Nome apenas sem sobrenome - NOK 200 
    ✕ password -- Senha em branco cadastra e devolve ERRO - NOK 500 
    ✕ password -- Senha nao enviada cadastra e devolve ERRO - NOK 500
    ✕ password -- Senha sem os criterios minimos 8 caracteres - NOK 200 
    ✓ email -- Usuario ja cadastrado - OK 400 
    ✓ email -- Email invalido - OK 400 
    ✕ loginType -- Tipo do Login em branco cadastra porem API consta como obrigatorio - NOK 200
    ✕ loginType -- Tipo do Login diferente de 'email' esta voltando 500 e cadastra porem de acordo com a doc somente email é valido - NOK 500 
    ✕ loginType -- Tipo do Login nao enviado e na doc é obrigatorio - NOK 200 

Tem 7 possiveis bugs na APIs 