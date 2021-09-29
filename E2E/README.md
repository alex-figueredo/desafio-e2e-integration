# desafio-e2e-integration

# Por que Cypress
- Facil implementação 
- Mesma linguagem em que vai ser o Backend e Front ganha o engajamento do time 
- Mesmo na versão free da suporte a um numero limitado de execuções com o uso do dash
- Tem uma comunidade bem ativa
- Ja vem com recursos de video e evidencia de erros na instalação default 

# Documentação
https://docs.cypress.io/guides/overview/why-cypress#Who-uses-Cypress


# Requisito 
Gerenciador de pacotes NPM ou yarn e instação conforme passo a passo 


# Execução
Apos clonar o projeto na pasta E2E 
  `yarn install`
  `./node_modules/.bin/cypress run`

Caso queira rodar via IDE propria do cypress
`./node_modules/.bin/cypress open`
E na sequecia dispara o teste que deseja 

## Casos de Teste 

    ✓ Email invalido 
    ✓ Senhas distintas 
    ✓ Email vazio 
    ✓ Email duplicate 
    ✓ Nao aceite aos termos 
    ✓ Senha fora dos padroes 
    x Nome completo

No front podia ter uma validação solicitando ao menos um sobrenome 
