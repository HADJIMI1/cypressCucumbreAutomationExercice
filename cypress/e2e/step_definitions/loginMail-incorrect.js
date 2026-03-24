import { Given, When,defineStep as And, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/loginPages";


let login=new LoginPage()
Given("je suis sur la page de connexion", () => {
  login.gotoHomePage();
});

When("je saisis un email invalide", () => {
  login.entrEmail("salimhadjmi195400@gmail.com");
  
  
})
And("je saisis un mot de passe correct", ()=>{
    login.enterPassword("Salimsalim.14071995");

});

And("je clique sur le bouton login pour ce connecter", ()=>{
  login.buttonEnter()
})
Then("un message d'erreur Identifiants incorrects est affiché dans la page",()=>{
  login.verifyErrorMessage()
})
And("l'utilisateur reste sur la page de login Page",()=>{
  login.verifUserStillOnLoginPage()
})
