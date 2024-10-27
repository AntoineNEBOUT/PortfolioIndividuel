document.getElementById('toggle_popup').addEventListener('change', function() {
    var element = document.getElementById('menu_mobile_popup');
    if (this.checked) {
      element.classList.remove('hidden');
      element.classList.add('flex');
      document.querySelector('header').classList.add('h-full');
      document.querySelector('nav').classList.add('bg-cardBackground');
    } else {
      element.classList.add('hidden');
      element.classList.remove('flex');
      document.querySelector('header').classList.remove('h-full');
      document.querySelector('nav').classList.remove('bg-cardBackground');
    }
  });

function scrollToSectionMobile() {
    document.getElementById('toggle_popup').checked = false;
    document.getElementById('menu_mobile_popup').classList.add('hidden');
    document.querySelector('header').classList.remove('h-full');
    document.querySelector('nav').classList.remove('bg-cardBackground');
}