import utility from "../utility/Locators.json"


export default class HomePage{

visitPage=utility.url
// aller sur la page d'aceuil
gotoHomePage() {
        cy.visit(this.visitPage)
    }


}