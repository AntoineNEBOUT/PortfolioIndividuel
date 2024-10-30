/* Initialisation des constantes */
const openPortfolio = document.getElementById('project_portfolio');
const openEsport = document.getElementById('project_esport');
const openNSI = document.getElementById('project_nsi');
const closePopup = document.getElementById('closePopup');
const popupProjects = document.getElementById('projects_popup');

/* Initialisation des écouteurs d'événements liés à l'ouverture de la popup détaillant les projets */
// Appelle la fonction 'openPopup' lorsque la div du projet du portfolio personnel est cliquée
openPortfolio.addEventListener('click', () => {
    openPopup('portfolio');
});

// Appelle la fonction 'openPopup' lorsque la div du projet du site wordpress est cliquée
openEsport.addEventListener('click', () => {
    openPopup('esport');
});

// Appelle la fonction 'openPopup' lorsque la div du projet du gestionnaire de tournoi est cliquée
openNSI.addEventListener('click', () => {
    openPopup('nsi');
});

// Cache la popup lorsque le bouton 'Fermer' est cliqué
closePopup.addEventListener('click', () => {
    popupProjects.classList.add('hidden');
    popupProjects.classList.remove('flex');
});

function openPopup(projectName) {
    switch (projectName) {
        case 'portfolio':
			document.getElementById('project_title').innerHTML = "Portfolio personnel";
			document.getElementById('project_description').innerHTML = "Il s’agit d’un projet dont l’objectif est d’aboutir à la création d’un portfolio personnel. Il m’a permis de mettre en pratique mes compétences organisationnelles et de design avec Figma. Ce projet s’inscrit dans un projet plus important, celui de réaliser à terme : un portfolio commun pour notre promotion.";
			document.getElementById('project_image').src = 'images\\projectsPictures\\portfolioLogo.avif';
            break;

        case 'esport':
			document.getElementById('project_title').innerHTML = "Site vitrine pour une équipe d'esport";
			document.getElementById('project_description').innerHTML = "Il s’agit d’un projet visant à réaliser un site web en utilisant WordPress. Cela comprend la rédaction de différents documents tels qu’un cahier des charges et des spécifications fonctionnelles. Ce projet complet nous a permis de mettre en pratique à la fois nos compétences en gestion de projet et en développement.";
			document.getElementById('project_image').src = 'images\\projectsPictures\\g4EsportLyonLogo.png';
            break;

        case 'nsi':
			document.getElementById('project_title').innerHTML = "Gestionnaire de tournoi - Les Trophées NSI 2024";
			document.getElementById('project_description').innerHTML = "Il s'agit d'un projet de logiciel collaboratif et communautaire de gestion et de visualisation de tournois. C'est une application de bureau développée avec Python associé à PyQt5. Ce projet a eu lieu dans le cadre du concours ”Les Trophées NSI” (2024).";
			document.getElementById('project_image').src = 'images\\projectsPictures\\olympicTournamentImage.avif';
            break;

        default:
            break;
    }

    popupProjects.classList.remove('hidden');
    popupProjects.classList.add('flex');
}