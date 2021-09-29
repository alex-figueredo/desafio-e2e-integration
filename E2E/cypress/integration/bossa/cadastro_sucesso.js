/// <reference types="cypress" />

context('Casos de erro', () => {
  beforeEach(() => {
    cy.visit('https://dev.app.bossabox.com/login')
    
  })



  it('Email ', () => {

    cy.login("Test Bossa","test"+new Date().getTime()+"@test.com","Va654321","Va654321",true)
    cy.basicInfo(" Afghanistan ","Acre","Rio Branco","Masculino","DevOps","Redes sociais da BossaBox","Acima de 10 anos","(11) 11111-1111")
    
    cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
  })
  
})
