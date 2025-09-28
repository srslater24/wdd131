const themeSelector = document.querySelector('#theme-select');
let pageBody = document.querySelector('body');
let logoImg = document.querySelector('.logo');

function changeTheme() {
    let current = themeSelector.value;

    if (current === 'dark') {
        pageBody.classList.add('dark');
        logoImg.src = 'logo_white.png';
    } else {
        pageBody.classList.remove('dark');
        logoImg.src = 'logo.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);