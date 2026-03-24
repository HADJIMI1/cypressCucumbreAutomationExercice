import utility from "../utility/Locators.json"

export default class AddCartProdect {

visit_brandProduct=utility.urlPage_brandproducts
    
    visitProductPolo() {
        cy.visit(this.visit_brandProduct)
    }
    BrandPolo() {
        cy.get("a[href='/brand_products/Polo']")
            .should("be.visible")
            .click()
    }

    addProductPolo() {
        cy.get("[data-product-id='1']", { timeout: 9500 }).contains('Add to cart').click({ force: true })
            .should("be.visible")
            .click();
    }

    closePopup() {
        
        cy.wait(950)
        cy.get("button[data-dismiss='modal']")
            .should("be.visible")
            .click({ force: true });
    }




}



