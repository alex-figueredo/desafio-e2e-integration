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
Cypress.Commands.add('cadastro', (fullName,email, password,confirmPassword, terms) => {   

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


Cypress.Commands.add('login', (email, password) => {   
    cy.get('#input-email').type(email)
    cy.get('#input-password').type(password)
})



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
  // failing the test
    return false
})
