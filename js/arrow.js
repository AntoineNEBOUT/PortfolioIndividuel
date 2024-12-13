/* Initialisation des constantes */
const arrowDiv = document.getElementById("arrow");
const aboutMeSection = document.getElementById('about_me');
// Constante qui contient la hauteur de la page maximale où peut être affichée la flèche
const aboutMeMidPoint = aboutMeSection.offsetTop + (aboutMeSection.offsetHeight / 7);

// Execute la fonction lorsque l'utilisateur scroll sur la page
window.addEventListener('scroll', 
    function() {
        if (window.scrollY > aboutMeMidPoint) {
            // La flèche est cachée si l'utilisateur scroll au delà de la limite
            arrowDiv.classList.add('hidden');
        } else {
            // La flèche est affichée si l'utilisateur remonte en haut de la page
            arrowDiv.classList.remove('hidden');
        }
    });