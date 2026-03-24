import fixtures from "../cypress/fixtures/users.json"
import utility from "../utility/loginLocators.json"
/// <reference types="cypress" />


export default class LoginPage {

    email = utility.login.Email;
    password = utility.login.loginPassword;
    loginButtonSignup = utility.login.signupButton;
    visitPage = utility.login.urlPageLogin


    constructor() {

    }
    gotoHomePage() {
        cy.visit(this.visitPage)
    }
    entrEmail(email) {
        const mail = cy.get(this.email)
        mail.type(email);
    }
    enterPassword(passwords) {
        const password = cy.get(this.password)
        password.type(passwords);

    }
    buttonEnter() {
        const loginButtonClick = cy.get(this.loginButtonSignup)
        loginButtonClick.click()
    }
    verifyLoginSuccess() {
        const loginSuccess = cy.contains(" Logged in as ")
        loginSuccess.should("be.visible")
    }
    verifyErrorMessage() {
        const mailOrPasswordIncorrect = cy.contains("Your email or password is incorrect!")
        mailOrPasswordIncorrect.should("be.visible")
    }
    verifyImagePage() {

        cy.get("a > img").should("be.visible")

    }
    verifUserStillOnLoginPage() {
        cy.url().should('include', '/login');
    }





}
