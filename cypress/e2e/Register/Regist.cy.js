import NavigationPage from "../../support/Navigator/Navigation";
import DataInvalid from "../../fixtures/DataInvalid.json";
import UserData from "../../fixtures/UserData.json";

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

  // Positive Test
  it('TC - 1 : Berhasil Registrasi', () => {
    cy.homepage()
    cy.nama(FirstName,LastName)
    cy.ketikemail(EmailDummy,'A@1234567')
    cy.url().should('include','customer')
  })
  
  // Negative Test
  it('TC - 2 : Email telah digunakan', () => {
    cy.homepage()
    cy.nama(FirstName,LastName)
    cy.ketikemail('Dummy@gmail.com','A@123456')
    cy.kosong('.message-error > div','There is already an account with this email address. If you are sure that it is your email address,')
  })

    // Negative Test
  it('TC - 3 : Nama Akhir kosong', () => {
    cy.homepage()
    cy.NoLast(FirstName,EmailDummy,'A@123456')
    cy.kosong('#maincontent','This is a required field.')
  })
    // Negative Test
  it('TC - 4 : Nama Awal Kosong', () => {
    cy.homepage()
    cy.NoFirst(LastName,EmailDummy,'A@123456')
    cy.kosong('#maincontent','This is a required field.')
  })
    // Negative Test
  it(' TC - 5 : Email Salah - Command', () => {
    cy.homepage()
    cy.nama(FirstName,LastName)
    cy.ketikemail('asdasd$gmail.com','A@123456')
    cy.kosong('#maincontent','Please enter a valid email address (Ex: johndoe@domain.com).')
  })

    // Negative Test 
  it('TC - 6 : Password tanpa symbol', () => {
    cy.homepage()
    cy.nama(FirstName,LastName)
    cy.ketikemail(EmailDummy,'12313213')
    cy.kosong('#maincontent','Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
  })

    // Negative Test
  it('TC - 7 : Password Berbeda', () => {
    cy.homepage()
    cy.nama(FirstName,LastName)
    cy.Passwrd(EmailDummy,'A@123456','A@113456')
    cy.kosong('#maincontent','Please enter the same value again.')
  })
 
    // Negative Test
  it('TC - 8 : Password kurang dari 8 ', () => {
    cy.homepage()
    cy.data(FirstName,LastName,EmailDummy,'A@1234','A@1234')
    cy.get('#maincontent')
    .should('contain.text','Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
  })

  // Positive Test with Fixture
  it('TC - 9 :Testing Valid', () => {
    cy.homepage()
     cy.fixture('UserData.json').then((users) => {
      const UserData = users[1]
      cy.data(UserData.namaawal, UserData.namaakhir, UserData.email, UserData.pssw)
      cy.url().should('include','customer') 
    })
  })

  
  // Positive Test with Fixture
  it('TC - 10 :Testing Invalid Data', () => {
    cy.homepage()
     cy.fixture('DataInvalid.json').then((data) => {
      data.invalid.forEach((userdata) => {
        console.log(userdata.invalid_awal, userdata.invalid_akhir, userdata.invalid_user, userdata.invalid_pass);
        cy.get('#maincontent').should('be.visible')
      });
    })
  })


  // Negative Test
  it('TC - 11 : Berhasil Mendaftar', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    const navigationPage = new NavigationPage();
    const userData = UserData.DataUser2;
    navigationPage.inputNama(userData.firstnama);
    navigationPage.inputNamaakhir(userData.last);
    navigationPage.inputEmail(userData.email);
    navigationPage.inputPass(userData.passwd);
    navigationPage.inputRepass(userData.cpasswd);
    navigationPage.inputButton(); 
    navigationPage.verifError();
  });

  // Negative Test
  it.only('TC - 12 : FirstName Tidak Ada', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    const navigationPage = new NavigationPage();
    const userData = UserData.DataUser2;
    navigationPage.inputNamaakhir(userData.last);
    navigationPage.inputEmail(userData.email);
    navigationPage.inputPass(userData.passwd);
    navigationPage.inputRepass(userData.cpasswd);
    navigationPage.inputButton(); 
    navigationPage.verifError();
  });

  
  // Negative Test Sukses mendaftar
  it('TC - 13 : Lastname tidak ada', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    const navigationPage = new NavigationPage();
    const userData = UserData.DataUser2;
    navigationPage.inputNama(userData.firstnama);
    navigationPage.inputEmail(userData.email);
    navigationPage.inputPass(userData.passwd);
    navigationPage.inputRepass(userData.cpasswd);
    navigationPage.inputButton(); 
    navigationPage.verifError();
  });
})