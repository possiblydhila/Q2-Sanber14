// describe('login test', () => {

//     beforeEach(() => {
//         cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
//     })

//     it('Login Page Loaded', () => {
//         cy.get('.panel > .header > .authorization-link > a')
//         cy.get('.page-title-wrapper').should('contain.text', 'Customer Login')
//     })

//     it('Login Success', () => {
//         cy.get('#email').type('johnisawesome@email.com')
//         cy.get('#pass').type('@john123')
//         cy.get('#send2').click
//         cy.url().should('include', 'customer/account')
//     })

//     it('Login Failed - Wrong Credentials', () => {
//         cy.get('#email').type('johnn@gmail.com')
//         cy.get('#pass').type('123')
//         cy.get('#send2').click({ timeout: 3000 })
//         cy.get('.message-error').should('be.visible')
//     })
//     // final
// })

import NavigationPage from "../support/Navigator/Navigation";
import DataInvalid from "../fixtures/DataInvalid.json";
import UserData from "../fixtures/UserData.json";

describe('login test', () => {
    beforeEach( () => {
        cy.homepage({ timeout: 6000 })
        cy.contains("Sign In").click()
    });

    it('Login Page Loaded', () => {
        const navigationPage = new NavigationPage();
        navigationPage.verifyLoginPage()
    })

    it('Login Success', () => {
        const navigationPage = new NavigationPage()
        navigationPage.inputCredentials()
    })

    it('Login Failed', () => {
        cy.get('#email').type('johnn@gmail.com')
        cy.get('#pass').type('123')
        cy.get('#send2').click({ timeout: 3000 })
        cy.get('.message-error').should('be.visible')
    })

}) 

