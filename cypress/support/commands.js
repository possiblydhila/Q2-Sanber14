
Cypress.Commands.add('homepage', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
});

Cypress.Commands.add('ketikemail', (useremail,userpassw) => {
    cy.get('#email_address').clear().type(useremail)
    cy.get('#password').clear().type(userpassw)
    cy.get('#password-confirmation').clear().type(userpassw)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
})

Cypress.Commands.add('NoLast', (awal,useremail,userpassw) => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').clear().type(awal)
    cy.get('#email_address').clear().type(useremail)
    cy.get('#password').clear().type(userpassw)
    cy.get('#password-confirmation').clear().type(userpassw)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
})

Cypress.Commands.add('NoFirst', (akhir,useremail,userpassw) => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#lastname').clear().type(akhir)
    cy.get('#email_address').clear().type(useremail)
    cy.get('#password').clear().type(userpassw)
    cy.get('#password-confirmation').clear().type(userpassw)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
})

Cypress.Commands.add('data', (awal,akhir,useremail,userpassw) => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').clear().type(awal)
    cy.get('#lastname').clear().type(akhir)
    cy.get('#email_address').clear().type(useremail)
    cy.get('#password').clear().type(userpassw)
    cy.get('#password-confirmation').clear().type(userpassw)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
})
Cypress.Commands.add('Passwrd', (useremail,userpassw,salapass) => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#email_address').clear().type(useremail)
    cy.get('#password').clear().type(userpassw)
    cy.get('#password-confirmation').clear().type(salapass)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
})
Cypress.Commands.add('nama', (awal,akhir) => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').clear().type(awal)
    cy.get('#lastname').clear().type(akhir)
})

Cypress.Commands.add('kosong', (elemen,notif) => {
    cy.get(elemen).should('contain.text',notif)
})

Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').type(email) 
    cy.get('#pass').type(password) 
    cy.get('#send2').click({timeout: 3000})
    // cy.url().should('include', '/customer/account/login')
});
