import utility from "../utility/Locators.json"


export default class HomePage{

visitPage=utility.url

gotoHomePage() {
        cy.visit(this.visitPage)
    }


}