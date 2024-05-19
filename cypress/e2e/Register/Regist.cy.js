describe('Regist', () => {


  it('Berhasil Registrasi', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Dummy')
    cy.get('#lastname').type('dumdum')
    cy.get('#email_address').type('dummy22@gmail.com')
    cy.get('#password').type('A@123456')
    cy.get('#password-confirmation').type('A@123456')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.url().should('include','customer')
  })
  it.only('Email sudah digunakan', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Dummy')
    cy.get('#lastname').type('dumdum')
    cy.get('#email_address').type('dummy22@gmail.com')
    cy.get('#password').type('A@123456')
    cy.get('#password-confirmation').type('A@123456')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-error') 
    .should('have.class', '.message-error ')
    .and('contain.text', 'There is already an account with this email addressccess.')
  })
  it('Nama Akhir kosong', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Dummy')
    cy.get('#email_address').type('dummy22@gmail.com')
    cy.get('#password').type('A@123456')
    cy.get('#password-confirmation').type('A@123456')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    //cy.get('#maincontent').should('This is a required field.')
  })
  it('Nama Awal kosong', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#lastname').type('dumdum')
    cy.get('#email_address').type('dummy22@gmail.com')
    cy.get('#password').type('A@123456')
    cy.get('#password-confirmation').type('A@123456')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    
  })
  it('Email Salah', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Dummy')
    cy.get('#lastname').type('dumdum')
    cy.get('#email_address').type('dummy22#gmail.com')
    cy.get('#password').type('A@123456')
    cy.get('#password-confirmation').type('A@123456')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    
  })
  it('Password kurang dari 8', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Dummy')
    cy.get('#lastname').type('dumdum')
    cy.get('#email_address').type('dummy22@gmail.com')
    cy.get('#password').type('A@1234')
    cy.get('#password-confirmation').type('A@1234')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    
  })
  it('Password tanpa symbol', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Dummy')
    cy.get('#lastname').type('dumdum')
    cy.get('#email_address').type('dummy22@gmail.com')
    cy.get('#password').type('AA123456')
    cy.get('#password-confirmation').type('AA123456')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  
  })
  it('Password Berbeda', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Dummy')
    cy.get('#lastname').type('dumdum')
    cy.get('#email_address').type('dummy22@gmail.com')
    cy.get('#password').type('A@123456')
    cy.get('#password-confirmation').type('B@123456')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.url().should('include','customer')
  })
 
 
 
})