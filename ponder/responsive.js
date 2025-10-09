const menuButton = document.querySelector('.menu-btn');
let nav = document.querySelector('nav')

function openMenu() {
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
    } else {
        nav.classList.add('hidden');
    }
}

menuButton.addEventListener('click', openMenu);