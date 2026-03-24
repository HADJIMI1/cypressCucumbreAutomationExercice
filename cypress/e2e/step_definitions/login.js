import { Given, When, Then,defineStep as And } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/loginPages";


let login=new LoginPage()
Given("je suis sur la page de connexion d'Automation Exercise", () => {
  login.gotoHomePage();
});

When("je saisis un email valide", () => {
  login.entrEmail("salimhadjimi195400@gmail.com");
  
  
})
And("je saisis le mot de passe correspondant", ()=>{
    login.enterPassword("Salimsalim.14071995");

});

And("je clique sur le bouton login", ()=>{
  login.buttonEnter()
})

Then("l'utilisateur est redirigé vers la page d'accueil", () => {
   login.verifyLoginSuccess()
})

And("le titre Automation Exercise est affiché correctement",()=>{
  login.verifyImagePage()
})
    
;






