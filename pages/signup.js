import utility from "../utility/Locators.json"
import users from "../cypress/fixtures/users.json"

export default class SignupLogin {

    goToPageLogin() {
        cy.visit(utility.urlLogin)
    }

    sing() {
        cy.get(utility.signupName).type(users.name)
        cy.xpath(utility.signupEmail).type(users.email)
        cy.get(utility.signupButton).click()
    }


    signupLogins() {
        cy.get("body").then(($body) => {
            if ($body.text().includes("Enter Account Information")) {
                cy.get(utility.password).type(users.password)
                cy.get(utility.day).select(users.dateOfBrith.day)
                cy.get(utility.month).select(users.dateOfBrith.month)
                cy.get(utility.year).select(users.dateOfBrith.years)

                cy.get(utility.checkBox).eq(0).check({ force: true })
                cy.get(utility.checkBox1).eq(1).check({ force: true })

                cy.xpath(utility.data.fristName).type(users.name)
                cy.get(utility.data.lastName).type(users.fristname)
                cy.get(utility.data.company).type(users.company)

                cy.get(utility.data.adress1).type(users.adress1)
                cy.get(utility.data.adress2).type(users.adress2)

                cy.get(utility.data.continy).select(users.continy)

                cy.get(utility.data.state).type(users.ville)
                cy.get(utility.data.city).type(users.lieu)
                cy.get(utility.data.zipCode).type(users.codeZipe)
                cy.get(utility.data.phoneMobile).type(users.phone)

                cy.get(utility.data.creatAccount).click()
                cy.get(utility.continue).click({ force: true });

            } else {

                // --- LOGIN EXISTING USER ---
                cy.get(utility.loginMail).type(users.email)
                cy.get(utility.loginPassword).type(users.password)
                cy.get(utility.loginButton,{ timeout: 8000 }).click()

            }
        })
    }
     errorMessage(){
  cy.get(".signup-form")
    .should("contain.text", "Email Address already exist!")
}
}