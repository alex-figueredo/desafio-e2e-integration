/// <reference types="cypress" />

context('Casos de erro', () => {
  beforeEach(() => {
    cy.visit('/')
    
  })



  it('Email invalido', () => {

    cy.cadastro("Test Bossa","test.com.com","Va654321","Va654321",true)
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
    cy.get('.bbox-context-banner > .card').should('have.text','E-mail e/ou senha inválidos')
  })
  it('Senhas distintas', () => {
    cy.cadastro("Test Bossa","test1@com.com","Va6543a1","Va654321",true)
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
    cy.get('.bbox-context-banner > .card').should('have.text','As senhas não correspondem')
  })

  it('Email vazio', () => {
    cy.cadastro("Test Bossa","","Va654321","Va654321",true)
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
    cy.get('.bbox-context-banner > .card').should('have.text','Lembre-se de preencher os campos')
  })
  

  it('Email duplicate', () => {
    cy.cadastro("Test Bossa","test@test.com","Va654321","Va654321",true)
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
    cy.get('.bbox-context-banner > .card').should('have.text','E-mail já cadastrado!')
  })

  it('Nao aceite aos termos', () => {
    cy.cadastro("Test Bossa","test@test.com","Va654321","Va654321",false)
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
    cy.get('.bbox-context-banner > .card').should('have.text','É necessário aceitar os termos de uso e política de privacidade para prosseguir')
  })

  it('Senha fora dos padroes', () => {
    cy.cadastro("Test Bossa","test@test.com","V321","V321",false)
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
    cy.get('.bbox-context-banner > .card').should('have.text','A senha deve ter pelo menos 8 caracteres')
  })

  // Nome poderia exigir ao menos um sobrenome
  it('Nome completo', () => {
    cy.cadastro("Test","test@test.com","Va654321","Va654321",true)
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
    cy.get('.bbox-context-banner > .card').should('have.text','Lembre-se de preencher os campos')
  })
})
