const menuButton = document.querySelector('.menubutton');
let nav = document.querySelector('nav');

function openMenu() {
    nav.classList.toggle('hide');
}
menuButton.addEventListener('click', openMenu);

function handleResize() {
    if (window.innerWidth > 1000) {
        nav.classList.remove('hide');
    } else {
        nav.classList.add('hide');
    }
}
handleResize();
window.addEventListener('resize', handleResize);

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const closeBtn = document.querySelector('.close-viewer');

gallery.addEventListener('click', (event) => {
  const clickedImage = event.target.closest('img');
  if (!clickedImage) return;

  const src = clickedImage.getAttribute('src');
  const alt = clickedImage.getAttribute('alt');
  const fullSrc = src.split('-')[0] + '-full.jpeg';

  modalImg.src = fullSrc;
  modalImg.alt = alt;
  modal.showModal();
});

closeBtn.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
