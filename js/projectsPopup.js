/* Initialisation des constantes */
const openPortfolioCollectif = document.getElementById('project_portfolio_collectif');
const openPortfolio = document.getElementById('project_portfolio');
const openEsport = document.getElementById('project_esport');
const openNSI = document.getElementById('project_nsi');
const closePopup = document.getElementById('closePopup');
const popupProjects = document.getElementById('projects_popup');

/* Initialisation des écouteurs d'événements liés à l'ouverture de la popup détaillant les projets */
// Appelle la fonction 'openPopup' lorsque la div du projet du portfolio collectif est cliquée
openPortfolioCollectif.addEventListener('click', () => {
    openPopup('portfolioCollectif');
});
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
    /*
        Fonction qui affiche la popup des projet et qui charge le contenu relatif au projet souhaité
    */
   
    switch (projectName) {
        case 'portfolioCollectif':
            document.getElementById('project_title_portfolio_collectif').classList.remove("hidden");
            document.getElementById('project_description_portfolio_collectif').classList.remove("hidden");
            document.getElementById('project_image_portfolio_collectif').classList.remove("hidden");
            document.getElementById('project_title_portfolio').classList.add("hidden");
            document.getElementById('project_description_portfolio').classList.add("hidden");
            document.getElementById('project_image_portfolio').classList.add("hidden");
            document.getElementById('project_title_esport').classList.add("hidden");
            document.getElementById('project_description_esport').classList.add("hidden");
            document.getElementById('project_image_esport').classList.add("hidden");
            document.getElementById('project_title_nsi').classList.add("hidden");
            document.getElementById('project_description_nsi').classList.add("hidden");
            document.getElementById('project_image_nsi').classList.add("hidden");
            break;
        case 'portfolio':
            document.getElementById('project_title_portfolio_collectif').classList.add("hidden");
            document.getElementById('project_description_portfolio_collectif').classList.add("hidden");
            document.getElementById('project_image_portfolio_collectif').classList.add("hidden");
            document.getElementById('project_title_portfolio').classList.remove("hidden");
            document.getElementById('project_description_portfolio').classList.remove("hidden");
            document.getElementById('project_image_portfolio').classList.remove("hidden");
            document.getElementById('project_title_esport').classList.add("hidden");
            document.getElementById('project_description_esport').classList.add("hidden");
            document.getElementById('project_image_esport').classList.add("hidden");
            document.getElementById('project_title_nsi').classList.add("hidden");
            document.getElementById('project_description_nsi').classList.add("hidden");
            document.getElementById('project_image_nsi').classList.add("hidden");
            break;

        case 'esport':
            document.getElementById('project_title_portfolio_collectif').classList.add("hidden");
            document.getElementById('project_description_portfolio_collectif').classList.add("hidden");
            document.getElementById('project_image_portfolio_collectif').classList.add("hidden");
            document.getElementById('project_title_portfolio').classList.add("hidden");
            document.getElementById('project_description_portfolio').classList.add("hidden");
            document.getElementById('project_image_portfolio').classList.add("hidden");
            document.getElementById('project_title_esport').classList.remove("hidden");
            document.getElementById('project_description_esport').classList.remove("hidden");
            document.getElementById('project_image_esport').classList.remove("hidden");
            document.getElementById('project_title_nsi').classList.add("hidden");
            document.getElementById('project_description_nsi').classList.add("hidden");
            document.getElementById('project_image_nsi').classList.add("hidden");
            break;

        case 'nsi':
            document.getElementById('project_title_portfolio_collectif').classList.add("hidden");
            document.getElementById('project_description_portfolio_collectif').classList.add("hidden");
            document.getElementById('project_image_portfolio_collectif').classList.add("hidden");        
            document.getElementById('project_title_portfolio').classList.add("hidden");
            document.getElementById('project_description_portfolio').classList.add("hidden");
            document.getElementById('project_image_portfolio').classList.add("hidden");
            document.getElementById('project_title_esport').classList.add("hidden");
            document.getElementById('project_description_esport').classList.add("hidden");
            document.getElementById('project_image_esport').classList.add("hidden");
            document.getElementById('project_title_nsi').classList.remove("hidden");
            document.getElementById('project_description_nsi').classList.remove("hidden");
            document.getElementById('project_image_nsi').classList.remove("hidden");
            break;

        default:
            break;
    }

    popupProjects.classList.remove('hidden');
    popupProjects.classList.add('flex');
}