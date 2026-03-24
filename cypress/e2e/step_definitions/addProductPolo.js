import { Given,When,Then,defineStep as And } from "@badeball/cypress-cucumber-preprocessor"
import AddCartProdect from "../../../pages/addProductPolo"


let addCartProdect=new AddCartProdect()

Given("je suis sur la page d'aceuil",()=>{
    addCartProdect.visitProductPolo()
})
When("dirige vers produit Polo",()=>{
    addCartProdect.BrandPolo()
})
And("ajouter le produit au panier",()=>{
    addCartProdect.addProductPolo()
})
Then("fermer la poppup",()=>{
    addCartProdect.closePopup()

})