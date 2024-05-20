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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add('ketikemail', (useremail,userpassw) => {
    cy.get('#email_address').clear().type(useremail)
    cy.get('#password').clear().type(userpassw)
    cy.get('#password-confirmation').clear().type(userpassw)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
})

Cypress.Commands.add('data', (namaawal,akhir,useremail,userpassw) => {
    cy.get('#firstname').clear().type(namaawal)
    cy.get('#lastname').clear().type(akhir)
    cy.get('#email_address').clear().type(useremail)
    cy.get('#password').clear().type(userpassw)
    cy.get('#password-confirmation').clear().type(userpassw)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
})
Cypress.Commands.add('ketik1', (useremail,userpassw,salapass) => {
    cy.get('#email_address').clear().type(useremail)
    cy.get('#password').clear().type(userpassw)
    cy.get('#password-confirmation').clear().type(salapass)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
})
Cypress.Commands.add('nama', (awal,akhir) => {
    cy.get('#firstname').clear().type(awal)
    cy.get('#lastname').clear().type(akhir)
})

Cypress.Commands.add('kosong', (elemen,notif1) => {
    cy.get(elemen).should('contain.text',notif1)
})
