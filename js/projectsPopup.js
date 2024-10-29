/* Initialisation des constantes */
const openPortfolio = document.getElementById('project_portfolio');
const openEsport = document.getElementById('project_esport');
const openNSI = document.getElementById('project_nsi');
const closePopup = document.getElementById('closePopup');
const popup = document.getElementById('popup');

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
    popup.classList.add('hidden');
});

function openPopup(projectName) {
    switch (projectName) {
        case 'portfolio':
			document.getElementById('project_title').innerHTML = "Portfolio personnel";
			document.getElementById('project_description').innerHTML = "Accenderat super his incitatum propositum ad nocendum aliqua mulier vilis, quae ad palatium ut poposcerat intromissa insidias ei latenter obtendi prodiderat a militibus obscurissimis. quam Constantina exultans ut in tuto iam locata mariti salute.";
			document.getElementById('project_image').src = 'images\\projectsPictures\\portfolioLogo.avif';
            break;

        case 'esport':
			document.getElementById('project_title').innerHTML = "Site vitrine pour une équipe d'esport";
			document.getElementById('project_description').innerHTML = "Accenderat super his incitatum propositum ad nocendum aliqua mulier vilis, quae ad palatium ut poposcerat intromissa insidias ei latenter obtendi prodiderat a militibus obscurissimis. quam Constantina exultans ut in tuto iam locata mariti salute.";
			document.getElementById('project_image').src = 'images\\projectsPictures\\g4EsportLyonLogo.png';
            break;

        case 'nsi':
			document.getElementById('project_title').innerHTML = "Gestionnaire de tournoi - Les Trophées NSI 2024";
			document.getElementById('project_description').innerHTML = "Accenderat super his incitatum propositum ad nocendum aliqua mulier vilis, quae ad palatium ut poposcerat intromissa insidias ei latenter obtendi prodiderat a militibus obscurissimis. quam Constantina exultans ut in tuto iam locata mariti salute.";
			document.getElementById('project_image').src = 'images\\projectsPictures\\olympicTournamentImage.avif';
            break;

        default:
            break;
    }

    popup.classList.remove('hidden');
}