const themeToggleBtn = document.getElementById('theme_toggle');
// const bodyIndex = document.getElementById('bodyIndex');
const body = document.body;
let isDark = false;

// window.addEventListener('load', applyTheme);

themeToggleBtn.addEventListener('click', changeTheme);

function changeTheme() {
    if (isDark) {
        isDark = false;
        setCookie('darkMode', 'false', 7);
        // console.log(document.cookie);
        body.classList.remove('dark');
    } else {
        isDark = true;
        setCookie('darkMode', 'true', 7);
        // console.log(document.cookie);
        body.classList.add('dark');
    }
}

// function applyTheme() {
//     let cookies = document.cookie.split("darkMode=");
//     let darkModeState = cookies[cookies.length - 1];
//     if (darkModeState === "true") {
//         isDark = true;
//     } else {
//         isDark = false;
//     }
//     isDark = !isDark;
//     changeTheme();
//     // console.log(darkModeState);
//     // console.log("hello !");
// }

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

let cookies = document.cookie.split("darkMode=");
let darkModeState = cookies[cookies.length - 1];
if (darkModeState === "true") {
    isDark = true;
} else {
    isDark = false;
}
isDark = !isDark;
changeTheme();