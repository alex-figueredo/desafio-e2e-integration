// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (fullName,email, password,confirmPassword, terms) => {   

cy.get('.align-items-center > .bbox-button').click()

if (fullName  !== ""){
    cy.get('#input-fullName').type(fullName)
}
if (email  !== ""){
    cy.get('#input-email').type(email)
}

if (password  !== ""){
    cy.get('#input-password').type(password)
}

if (confirmPassword  !== ""){
    cy.get('#input-confirmPassword').type(confirmPassword)
}

if (terms  == true){
    cy.get('div.checkbox-icon i.icon').click()
}
cy.get('button.bbox-button.margin-top-big.bg-blue-base').click()
})


Cypress.Commands.add('basicInfo', (pais,estado,cidade,genero,profissao,indicacao,tempoDeExperiencia,telefone) => {   
    cy.get('#select-country').select(pais)
    cy.get(':nth-child(6) > .select-wrapper > #select-undefined').select(estado)
    // cy.get(':nth-child(7) > .select-wrapper > #select-undefined').click()
    cy.get(':nth-child(7) > .select-wrapper > #select-undefined').select(cidade)
    // cy.get('#select-gender').type(genero)
    // cy.get('#select-role').type(profissao)
    // cy.get('#select-utmSource').type(indicacao)
    // cy.get('#select-experienceTimeWithProducts').type(tempoDeExperiencia)
    // cy.get('#input-phone').type(telefone)
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
  // failing the test
    return false
    })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
