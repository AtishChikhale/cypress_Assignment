export class login {
    navigation() {
        cy.visit("https://facegenie-ams-school.web.app/")
    }

    loginCredential(email, password) {
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('button[type="submit"]').click()
    }
    validateLogo() {
        cy.get('[style="font-weight: 600; line-height: 20.8px;"]').should('be.visible')
    }

    logout(){
        cy.get('.MuiList-root > :nth-child(8)').click({force:true})
        cy.get('.css-3fc02r:nth-child(2)').click({force:true})
    }

    validDateLogout(){
        cy.get('.css-z80jug > .MuiTypography-root > b').should('have.text','RAI QR based attendance management admin portal.')
    }

    wrongPass(){
        cy.get(".MuiAlert-message.css-1xsto0d").should('have.text','Password wrong')
    }

    userNotFound(){
        cy.get('.MuiAlert-message.css-1xsto0d').should('have.text','User not found')
    }
}