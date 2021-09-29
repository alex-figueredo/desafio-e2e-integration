/// <reference types="cypress" />

context('Casos de Sucesso', () => {
  beforeEach(() => {
    cy.visit('/')
    
  })
  
  it('Cadastro com sucesso ', () => {
    const EMAIL = "test"+new Date().getTime()+"@test.com"
    const SENHA = "Va654321"
    cy.cadastro("Test Bossa",EMAIL,SENHA,"Va654321",true)
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
    cy.get('.padding-left-tiny').click()
    cy.login(EMAIL,SENHA)
    cy.get('.margin-vertical-big').click()
    cy.get('.font-size-huge').should('have.text', '\n\t\t\tOlá, Test\n\t\t')
  })
  
})
