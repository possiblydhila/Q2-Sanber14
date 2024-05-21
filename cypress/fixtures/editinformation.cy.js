describe('login test', () => {

    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    })

    // Login with valid user
    it('Login Success', () => {
        cy.get('#email').type('qateam14@gmail.com')
        cy.get('#pass').type('Password123!')
        cy.get('#send2').click()

    // --- for new data address book
    // Edit data address book
        cy.get('.block-title > .action > span').click()
    // Personal Information
        cy.get('#firstname').clear().type('Billie')
        cy.get('#lastname').clear().type('Eillish')
        cy.get('#company').type('Google LLC')
        cy.get('#company').type('101')
    // Address Information
        cy.get('#street_1').type('Pacific Century Place Tower Level 45 SCBD Lot 10')
        cy.get('#city').type('South Jakarta')
        cy.get('#region_id').select('Alaska')
        cy.get('#zip').type('10921')
        cy.get('#telephone').type('081234566')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()

    // -- add new address information
    // Add Address Information
        cy.get('.block-title > .action > span').click()
        cy.get('.column > .actions-toolbar > div.primary > .action').click()
    // Personal Information
        cy.get('#firstname').clear().type('Billie')
        cy.get('#lastname').clear().type('Eillish')
        cy.get('#company').type('Google LLC')
        cy.get('#company').type('101')
     // Address Information
        cy.get('#street_1').type('Pacific Century Place Tower Level 45 SCBD Lot 10')
        cy.get('#city').type('South Jakarta')
        cy.get('#region_id').select('Alaska')
        cy.get('#zip').type('10921')
        cy.get('#telephone').type('081234566')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    
    // Edit Account Information
        cy.get(':nth-child(7) > a').click()
        cy.get('#firstname').clear().type('Ren')
        cy.get('#lastname').clear().type('Putri')

    // Change Email
        cy.get('#change-email').click()
        cy.get('#email').clear().clear().type('qateam14@gmail.com')
        cy.get('#current-password').clear().type('Password123')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()

    // Change Password
       cy.get('#change-password').click()
       cy.get('#current-password').type('Password123!')
       cy.get('#password').type('Team14jaya')
       cy.get('#password').type('Team14jaya')

      
    // Automatically Logout
        cy.get('#email').type('team14@gmail.com')
        cy.get('#pass').type('Team14jaya')
        cy.get('#send2').click()
        cy.get(':nth-child(7) > a').click()
        })

    // final
})
