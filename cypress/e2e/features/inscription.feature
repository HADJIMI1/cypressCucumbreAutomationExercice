Feature: Inscription et connexion utilisateur

  Scenario: Inscription ou connexion selon l'existence de l'utilisateur
    Given Je suis sur la page d'inscription
    When Je saisis mon nom et mon email 
    Then je vais verifie est ce que le compte exeste sinon inscrire 
   