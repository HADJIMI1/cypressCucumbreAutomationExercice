Feature: ajouter le produit au panier 

  Scenario: Inscription ou connexion selon l'existence de l'utilisateur
    Given je suis sur la page d'aceuil
    When dirige vers produit Polo
    And ajouter le produit au panier
    Then fermer la poppup
    
   