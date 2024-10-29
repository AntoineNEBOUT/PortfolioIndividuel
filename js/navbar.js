/* Initialisation des constantes */
const sections = document.querySelectorAll('section'); // Consante renvoyant aux sections de la page
const navLinks = document.querySelectorAll('nav a'); // Consante renvoyant aux liens contenu dans la NavBar

/* Écouteur d'événements qui se déclenchent lors du scroll */
window.addEventListener('scroll', () => {
    let current = '';

    /* Parcours de chaque sections pour déterminer la section actuelle */
    sections.forEach(section => {
        const sectionTop = section.offsetTop; // Affectation à 'sectionTop' des coordonnées du haut de la section
        if (pageYOffset >= sectionTop - 60) { // Vérification de l'écart entre le haut de la section et le haut de la page
            current = section.getAttribute('id'); // Affectation à 'current' du nom de la section actuelle
        }
    });

    /* Parcours de chaques liens de la NavBar pour appliquer un style défini à celui correspondant à la section actuelle */
    navLinks.forEach(link => {
        link.classList.remove('activeNavBar'); // Suppression du style 'actif' appliqué à chaque liens
        if (link.getAttribute('href').includes(current)) { // Vérification que le lien contient le nom de la section
            link.classList.add('activeNavBar'); // Ajout du style au lien renvoyant vers la section actuelle
        }
    });
});