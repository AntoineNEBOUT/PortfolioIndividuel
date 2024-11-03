/* Initialisation des constantes */
const menuMobile = document.getElementById('menu_mobile_popup'); // Constante renvoyant au menu mobile de la page
const pageHeader = document.querySelector('header'); // Constante renvoyant au Header de la page
const pageNavBar = document.querySelector('nav'); // Constante renvoyant à la NavBar de la page

/* Déclenchement de al fonction 'toggleMenuMobile' lorsque l'état du menu burger change */
document.getElementById('toggle_popup').addEventListener('change', function() {
    toggleMenuMobile(this.checked);
  });

function toggleMenuMobile(burgerMenuState) {
	/*
		Fonction qui affiche ou cache le menu mobile en fonction de la valeur de 'burgerMenuState'
	*/

	if (burgerMenuState) { // Dans le cas où la checkbox du menu burger est activée
		menuMobile.classList.remove('hidden');
		menuMobile.classList.add('flex');
	  } else { // Dans le cas où la checkbox du menu burger est désactivée
		menuMobile.classList.add('hidden');
		menuMobile.classList.remove('flex');
	  }
}

function closeMenuMobile() {
	/*
		Fonction qui cache le menu mobile. Elle est utilisée lorsqu'un lien du menu est cliqué
	*/
	
    document.getElementById('toggle_popup').checked = false; // Décochage du menu burger
    menuMobile.classList.add('hidden');
    pageHeader.classList.remove('h-full');
    pageNavBar.classList.remove('bg-cardBackground');
}