/* Initialisation des constantes */
const themeToggleBtn = document.getElementById('theme_toggle');
const body = document.body;

/* Initialisation des variables */
let isDark = false;
let cookies = document.cookie.split("darkMode=");
let darkModeState = cookies[cookies.length - 1];

// Écouteur d'événements qui appel la fonction 'changeTheme' lorsque le bouton de changement de thème est cliqué
themeToggleBtn.addEventListener('click', changeTheme);

function changeTheme() {
    /*
        Fonction qui change le thème de la page
    */
   
    if (isDark) { // Vérification de l'état actuel de la page
        isDark = false;
        setCookie('darkMode', 'false', 7); // Modification du cookie du site
        body.classList.remove('dark'); // Suppression de la class 'dark' dans le corps de la page
    } else {
        isDark = true;
        setCookie('darkMode', 'true', 7); // Modification du cookie du site
        body.classList.add('dark'); // Ajout de la class 'dark' dans le corps de la page
    }
}

function setCookie(name, value, days) {
    /*
        Fonction qui prend en paramètre : 
        - 'name' : le nom du cookie
        - 'value' : la valeur du cookie
        - 'days' : le nombre de jour(s) avant l'expiraton du cookie
        Elle modifie le cookie du site correspondant aux valeurs passées en paramètre
    */

    let expires = "";

    if (days) { // Vérification que la variable 'days' n'est pas vide
        let date = new Date(); // Affectation à 'date', de la date actuelle en ms depuis 1970
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Modification de 'date' en ajoutant le nombre de jours à la date actuelle
        expires = "; expires=" + date.toUTCString(); // Affectation à 'expires', de la chaîne de caractères finale
    }

    document.cookie = name + "=" + (value || "") + expires + "; path=/"; // Modification ou création du cookie
}

/* Récupération du cookie et changement de la variable définissant le thème du site */
if (darkModeState === "true") {
    isDark = true;
} else {
    isDark = false;
}
isDark = !isDark;
changeTheme(); // Application du changement de thème