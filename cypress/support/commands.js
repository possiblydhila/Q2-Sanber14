
Cypress.Commands.add('ketikemail', (useremail,userpassw) => {
    cy.get('#email_address').clear().type(useremail)
    cy.get('#password').clear().type(userpassw)
    cy.get('#password-confirmation').clear().type(userpassw)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
})

Cypress.Commands.add('data', (awal,akhir,useremail,userpassw) => {
    cy.get('#firstname').clear().type(awal)
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
