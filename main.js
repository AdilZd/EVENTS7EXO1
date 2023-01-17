// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Récupère le h1 dans une variable 
let Un = document.querySelector('h1');
// ### 2. Créer un programme qui met le texte du h1 en bleu
Un.style.color = 'blue';
// ### 3. Met ce programme dans une function 
function couleurBleu() {
    Un.style.color = 'blue';
    Deux.style.color = 'red';
}
// ### 4. Appelle cette function pour qu'elle soit executé 

// ### 5. Met un écouteur d'événement sur le h1, qui au clique lance la function
let Deux = document.querySelector('h1');
Deux.addEventListener('click', couleurBleu);