Feature: Authentification et vérification du titre de la page d'accueil
  En tant qu'utilisateur d'Automation Exercise
  Je souhaite pouvoir me connecter avec un compte valide
  Afin de vérifier que l'accès à la page d'accueil fonctionne correctement
  et que le titre de la page est affiché correctement.



Scenario: Connexion réussie et vérification du titre de la page d'accueil
  Given je suis sur la page de connexion d'Automation Exercise
  When je saisis un email valide
  And je saisis le mot de passe correspondant
  And je clique sur le bouton login
  Then l'utilisateur est redirigé vers la page d'accueil 
  And le titre Automation Exercise est affiché correctement

Scenario: Tentative de connexion avec un Email invalide
 Given je suis sur la page de connexion 
  When je saisis un email invalide
  And je saisis un mot de passe correct
  And je clique sur le bouton login pour ce connecter 
  Then un message d'erreur Identifiants incorrects est affiché dans la page 
  And l'utilisateur reste sur la page de login Page 

  Scenario: Tentative de connexion avec un password invalide
  Given je suis sur la page de Login
  When je saisis un email correcte
  And je saisis un mot de password incorrect
  And je clique sur le bouton login Page
  Then un message d'erreur Identifiants incorrects est visible
 