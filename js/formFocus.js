const nameCard = document.getElementById('nameCard');
const mailCard = document.getElementById('emailCard');
const subjectCard = document.getElementById('subjectCard');
const messageCard = document.getElementById('messageCard');

document.getElementById('name').addEventListener('focus', function() {
    showActiveInput(0);
});

document.getElementById('name').addEventListener('blur', function() {
    hideActiveInput(0);
});

document.getElementById('email').addEventListener('focus', function() {
    showActiveInput(1);
});

document.getElementById('email').addEventListener('blur', function() {
    hideActiveInput(1);
});

document.getElementById('subject').addEventListener('focus', function() {
    showActiveInput(2);
});

document.getElementById('subject').addEventListener('blur', function() {
    hideActiveInput(2);
});

document.getElementById('message').addEventListener('focus', function() {
    showActiveInput(3);
});

document.getElementById('message').addEventListener('blur', function() {
    hideActiveInput(3);
});

function showActiveInput(input) {
    /*
    Cette procédure prend en paramètre un entier compris entre 0 et 3 
    et applique une bordure à la carte de l'input correspondant.
    */
    switch (input) {
        case 0:
            nameCard.classList.remove('border-background');
            nameCard.classList.add('border-primary');
            break;
        case 1:
            mailCard.classList.remove('border-background');
            mailCard.classList.add('border-primary');
            break;
            
        case 2:
            subjectCard.classList.remove('border-background');
            subjectCard.classList.add('border-primary');
            break;
            
        case 3:
            messageCard.classList.remove('border-background');
            messageCard.classList.add('border-primary');
            break;
    
        default:
            break;
    }
}

function hideActiveInput(input) {
    /*
    Cette procédure prend en paramètre un entier compris entre 0 et 3 
    et enlève le style de la bordure de la carte de l'input correspondant.
    */
    switch (input) {
        case 0:
            nameCard.classList.add('border-background');
            nameCard.classList.remove('border-primary');
            break;
        case 1:
            mailCard.classList.add('border-background');
            mailCard.classList.remove('border-primary');
            break;
            
        case 2:
            subjectCard.classList.add('border-background');
            subjectCard.classList.remove('border-primary');
            break;
            
        case 3:
            messageCard.classList.add('border-background');
            messageCard.classList.remove('border-primary');
            break;
    
        default:
            break;
    }
}