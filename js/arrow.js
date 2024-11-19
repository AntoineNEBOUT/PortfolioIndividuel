const arrowDiv = document.getElementById("arrow");
const aboutMeSection = document.getElementById('about_me');

window.addEventListener('scroll', 
    function() {
        console.log("scrollY : " + window.scrollY);
        const aboutMeMidPoint = aboutMeSection.offsetTop + (aboutMeSection.offsetHeight / 7);
        console.log("point à ne pas dépasser : " + aboutMeMidPoint);
        if (window.scrollY > aboutMeMidPoint) {
            console.log("je cache");
            arrowDiv.classList.add('hidden');
        } else {
            console.log("je montre");
            arrowDiv.classList.remove('hidden');
        }
    });