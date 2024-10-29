/* Initialisation des constantes */
const nameCard = document.getElementById('nameCard'); // Consante renvoyant à la div contenant le champ du nom
const mailCard = document.getElementById('emailCard'); // Consante renvoyant à la div contenant le champ du mail
const subjectCard = document.getElementById('subjectCard'); // Consante renvoyant à la div contenant le champ de l'objet
const messageCard = document.getElementById('messageCard'); // Consante renvoyant à la div contenant le champ du message

/* Initialisation des écouteurs d'événements liés à la sélection des champs de saisie du formulaire de contact */
// Appelle de la fonction 'showActiveInput' lorsque le champ d'indice 'name' est sélectionné
document.getElementById('name').addEventListener('focus', function() {
    showActiveInput(0);
});

// Appelle de la fonction 'showActiveInput' lorsque le champ d'indice 'email' est sélectionné
document.getElementById('email').addEventListener('focus', function() {
    showActiveInput(1);
});

// Appelle de la fonction 'showActiveInput' lorsque le champ d'indice 'subject' est sélectionné
document.getElementById('subject').addEventListener('focus', function() {
    showActiveInput(2);
});

// Appelle de la fonction 'showActiveInput' lorsque le champ d'indice 'message' est sélectionné
document.getElementById('message').addEventListener('focus', function() {
    showActiveInput(3);
});

/* Initialisation des écouteurs d'événements liés à la désélection des champs de saisie du formulaire de contact */
// Appelle de la fonction 'hideActiveInput' lorsque le champ d'indice 'name' est désélectionné
document.getElementById('name').addEventListener('blur', function() {
    hideActiveInput(0);
});

// Appelle de la fonction 'hideActiveInput' lorsque le champ d'indice 'email' est désélectionné
document.getElementById('email').addEventListener('blur', function() {
    hideActiveInput(1);
});

// Appelle de la fonction 'hideActiveInput' lorsque le champ d'indice 'subject' est désélectionné
document.getElementById('subject').addEventListener('blur', function() {
    hideActiveInput(2);
});

// Appelle de la fonction 'hideActiveInput' lorsque le champ d'indice 'message' est désélectionné
document.getElementById('message').addEventListener('blur', function() {
    hideActiveInput(3);
});

function showActiveInput(input) {
    /*
        Cette fonction prend en paramètre un entier compris entre 0 et 3 
        et applique une bordure à la carte de l'input correspondant.
    */
    switch (input) {
        case 0:
            nameCard.classList.remove('border-background');
            nameCard.classList.add('border-primary');
            nameCard.classList.add('shadow-md');
            nameCard.classList.add('shadow-primary25');
            break;
        case 1:
            mailCard.classList.remove('border-background');
            mailCard.classList.add('border-primary');
            mailCard.classList.add('shadow-md');
            mailCard.classList.add('shadow-primary25');
            break;
            
        case 2:
            subjectCard.classList.remove('border-background');
            subjectCard.classList.add('border-primary');
            subjectCard.classList.add('shadow-md');
            subjectCard.classList.add('shadow-primary25');
            break;
            
        case 3:
            messageCard.classList.remove('border-background');
            messageCard.classList.add('border-primary');
            messageCard.classList.add('shadow-md');
            messageCard.classList.add('shadow-primary25');
            break;
    
        default:
            break;
    }
}

function hideActiveInput(input) {
    /*
        Cette fonction prend en paramètre un entier compris entre 0 et 3 
        et enlève le style de la bordure de la carte de l'input correspondant.
    */
    switch (input) {
        case 0:
            nameCard.classList.add('border-background');
            nameCard.classList.remove('border-primary');
            nameCard.classList.remove('shadow-md');
            nameCard.classList.remove('shadow-primary25');
            break;
        case 1:
            mailCard.classList.add('border-background');
            mailCard.classList.remove('border-primary');
            mailCard.classList.remove('shadow-md');
            mailCard.classList.remove('shadow-primary25');
            break;
            
        case 2:
            subjectCard.classList.add('border-background');
            subjectCard.classList.remove('border-primary');
            subjectCard.classList.remove('shadow-md');
            subjectCard.classList.remove('shadow-primary25');
            break;
            
        case 3:
            messageCard.classList.add('border-background');
            messageCard.classList.remove('border-primary');
            messageCard.classList.remove('shadow-md');
            messageCard.classList.remove('shadow-primary25');
            break;
    
        default:
            break;
    }
}