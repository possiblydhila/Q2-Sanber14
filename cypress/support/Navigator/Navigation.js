class NavigationPage {
    first = '#firstname'
    last = '#lastname'
    email = '#email_address'
    passwd = '#password'
    cpasswd = '#password-confirmation'
    submit = '#form-validate > .actions-toolbar > div.primary > .action'
    error_msg = '#maincontent'

    login = '#send2'
    loginPage = '.panel > .header > .authorization-link > a'
    pageTitle ='.page-title-wrapper'

    emailLogin = '#email'
    pass = 'pass'

    inputNama(first) {
        cy.get(this.first).clear().type(first)
    }

    inputNamaakhir(last) {
        cy.get(this.last).clear().type(last)
    }

    inputEmail(email) {
        cy.get(this.email).clear().type(email)
    }

    inputPass(passwd) {
        cy.get(this.passwd).clear().type(passwd)
    }

    inputRepass(cpasswd) {
        cy.get(this.cpasswd).clear().type(cpasswd)
    }

    inputButton() {
        cy.get(this.submit).click()
    }

    verifError() {
        cy.get(this.error_msg).should('be.visible')
    }

    loginButton() {
        cy.get(this.login).click({ timeout: 3000 })
    }

    verifyLoginPage() {
        cy.get(this.loginPage)
        cy.get(this.pageTitle).should('contain.text', 'Customer Login')
    }
    
    inputCredentials(emailLogin, pass) {
        cy.get(this.emailLogin).clear().type(emailLogin)
        cy.get(this.pass).clear().type(pass)
    }
}

export default NavigationPage;