import RegistPage from "../../support/pageObjectRegist/RegistPage";

describe('Regist', () => {


  function RandomFirst() {
    const randomString = Math.random().toString(36).substring(2, 10);
    return randomString;
}
  function RandomLast() {
    const randomString = Math.random().toString(36).substring(2, 10);
    return randomString;
}

  function RandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10);
    const EmailDummy = randomString + "@gmail.com";
    return EmailDummy;
  }
  const FirstName = RandomFirst();
  const LastName = RandomLast();
  const EmailDummy = RandomEmail();


  it.only('Random name', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.nama(FirstName,LastName )
    cy.ketikemail(EmailDummy,'A@1234567')
    cy.url().should('include','customer')
  })
  
  it('Berhasil Registrasi', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.nama('Dummy','dumdum')
    cy.ketikemail(EmailDummy,'A@1234567')
    cy.url().should('include','customer')
  })

  it('Email sudah digunakan', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.nama('Dummy','dumdum')
    cy.ketikemail('dummy22@gmail.com','A@123456')
   // cy.get('.message-error > div').should('contain.text','There is already an account with this email address. If you are sure that it is your email address, ')
    cy.kosong('.message-error > div','There is already an account with this email address. If you are sure that it is your email address,')
  })

  it('Nama Akhir kosong', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Dummy')
    cy.ketikemail('asdasdd@gmail.com','A@123456')
    cy.kosong('#maincontent','This is a required field.')
  })

  it('Nama Awal kosong', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#lastname').type('dumdum')
    cy.ketikemail('asdasdd@gmail.com','A@123456')
    //cy.get('#maincontent').should('contain.text','This is a required field.')
    cy.kosong('#maincontent','This is a required field.')
    
  })
 
  it('Email Salah - Command', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.nama('Dummy','dumdum')
    cy.ketikemail('asdasd$gmail.com','A@123456')
    cy.kosong('#maincontent','Please enter a valid email address (Ex: johndoe@domain.com).')
  })


  it('Password tanpa symbol', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.nama('Dummy','dumdum')
    cy.ketikemail(EmailDummy,'12313213')
    cy.kosong('#maincontent','Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
  })

  it('Password Berbeda', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.nama('Dummy','dumdum')
    cy.ketik1(EmailDummy,'A@123456','A@113456')
    cy.kosong('#maincontent','Please enter the same value again.')
  })
 
  it('Password kurang dari 8 - Manual', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Dummy')
    cy.get('#lastname').type('dumdum')
    cy.get('#email_address').type('dummy22@gmail.com')
    cy.get('#password').type('A@1234')
    cy.get('#password-confirmation').type('A@1234')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#maincontent')
    .should('contain.text','Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
  })

  it('Testing Fixtures', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    // cy.fixture('userDataRegist.json').then((users) => {
    //   cy.data(users.namaawal,users.namaakhir,users.email,users.pssw)
    //   cy.url().should('include','customer') (Jika tidak menggunakan array)
     cy.fixture('userDataRegist.json').then((users) => {
      const userDataRegist = users[1]
      cy.data(userDataRegist.namaawal, userDataRegist.namaakhir, userDataRegist.email, userDataRegist.pssw)
      cy.url().should('include','customer') 
    })
  })

  it('Testing Fixtures', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
     cy.fixture('DataRegist.json').then((data) => {
      data.invalid.forEach((userdata) => {
        console.log(userdata.invalid_awal, userdata.invalid_akhir, userdata.invalid_user, userdata.invalid_pass);
        cy.get('#maincontent').should('be.visible')
      });
    })
  })

  it('Test POM 1', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get(RegistPage.nama_awl).type('dumyss')
    cy.get(RegistPage.nama_akh).type('dsada')
    cy.get(RegistPage.email_add).type('Dummyeer@gmail.com')
    cy.get(RegistPage.passwd).type('sadasd@Asda123')
    cy.get(RegistPage.repasswd).type('sadasd@Asda123')
    cy.get(RegistPage.error_msg).should('be.visible')
  })

  it('Test POM 2', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    RegistPage.inputNama('Kuda')
    RegistPage.inputNamaakhir('Liar')
    RegistPage.inputEmail('kudaliar@gmail.com')
    RegistPage.inputPass('A@1234567')
    RegistPage.inputRepass('A@1234567')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.url().should('include','customer') 
  })

})