import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignupLogin from "../../../pages/signup";


const signup = new SignupLogin();

Given("Je suis sur la page d'inscription", () => {
  signup.goToPageLogin();
});
When("Je saisis mon nom et mon email",()=>{
  signup.sing()
})

When("je vais verifie est ce que le compte exeste sinon inscrire", () => {
 signup.signupLogins()
});


