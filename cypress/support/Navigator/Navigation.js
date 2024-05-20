class NavigatorPage{
    
    first = '#firstname'
    last = '#lastname'
    email = '#email_address'
    passwd = '#password'
    cpasswd = '#password-confirmation'
    submit = '#submit'
    error_msg = '#maincontent'

    inputNama(first){
        cy.get(this.first).clear().type(first)
    }
    inputNamaakhir(last){
        cy.get(this.last).clear().type(last)
    }
    inputEmail(email){
        cy.get(this.email).clear().type(email)
    }
    inputPass(passwd){
        cy.get(this.passwd).clear().type(passwd)
    }
    inputRepass(cpasswd){
        cy.get(this.cpasswd).clear().type(cpasswd)
    }
    InputButton(submit){
        cy.cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    }
    verifError(error_msg){
        cy.get(this.error_msg).should('be.visible');
    }

}

export default new NavigatorPage()