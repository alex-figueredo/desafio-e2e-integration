/// <reference types="cypress" />

context('Casos de erro', () => {
  beforeEach(() => {
    cy.visit('https://dev.app.bossabox.com/login')
    
  })



  it('Email invalido', () => {

    cy.login("Test Bossa","test.com.com","Va654321","Va654321",true)
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
    cy.get('.bbox-context-banner > .card').should('have.text','E-mail e/ou senha inválidos')
  })
  it('Senhas distintas', () => {
    cy.login("Test Bossa","test1@com.com","Va6543a1","Va654321",true)
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
    cy.get('.bbox-context-banner > .card').should('have.text','As senhas não correspondem')
  })

  it('Email vazio', () => {
    cy.login("Test Bossa","","Va654321","Va654321",true)
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
    cy.get('.bbox-context-banner > .card').should('have.text','Lembre-se de preencher os campos')
  })
  

  it('Email duplicate', () => {
    cy.login("Test Bossa","test@test.com","Va654321","Va654321",true)
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
    cy.get('.bbox-context-banner > .card').should('have.text','E-mail já cadastrado!')
  })

  it('Nao aceite aos termos', () => {
    cy.login("Test Bossa","test@test.com","Va654321","Va654321",false)
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
    cy.get('.bbox-context-banner > .card').should('have.text','É necessário aceitar os termos de uso e política de privacidade para prosseguir')
  })

  it('Senha fora dos padroes', () => {
    cy.login("Test Bossa","test@test.com","V321","V321",false)
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
    cy.get('.bbox-context-banner > .card').should('have.text','A senha deve ter pelo menos 8 caracteres')
  })

  // Nome poderia exigir ao menos um sobrenome
  it('Nome completo', () => {
    cy.login("Test","test@test.com","Va654321","Va654321",true)
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
    cy.get('.bbox-context-banner > .card').should('have.text','Lembre-se de preencher os campos')
  })
})
