class RegistPage{
    error_msg = '#maincontent'
    nama_awl = '#firstname'
    nama_akh = '#lastname'
    email_add = '#email_address'
    passwd = '#password'
    repasswd = '#password-confirmation'

    inputNama(nama_awl){
        cy.get(this.nama_awl).clear().type(nama_awl)
    }
    inputNamaakhir(nama_akh){
        cy.get(this.nama_akh).clear().type(nama_akh)
    }
    inputEmail(email_add){
        cy.get(this.email_add).clear().type(email_add)
    }
    inputPass(passwd){
        cy.get(this.passwd).clear().type(passwd)
    }
    inputRepass(repasswd){
        cy.get(this.repasswd).clear().type(repasswd)
    }
    verifError(error_msg){
        cy.get(this.error_msg).should('be.visible');
    }

}

export default new RegistPage()