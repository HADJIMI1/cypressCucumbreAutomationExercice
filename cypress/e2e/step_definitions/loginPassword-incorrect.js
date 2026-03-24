import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/loginPages";


let login=new LoginPage()
Given("je suis sur la page de Login", () => {
  login.gotoHomePage();
});

When("je saisis un email correcte", () => {
  login.entrEmail("salimhadjimi195400@gmail.com");
  
  
})
When("je saisis un mot de password incorrect", ()=>{
    login.enterPassword("Salimsalim.147995");

});

Then("je clique sur le bouton login Page", ()=>{
  login.buttonEnter()
})

Then("un message d'erreur Identifiants incorrects est visible", () => {
   login.verifyErrorMessage()
    
});