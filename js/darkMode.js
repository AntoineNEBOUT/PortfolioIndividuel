const themeToggleBtn = document.getElementById('theme_toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
});