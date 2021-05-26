// scripts for manu to make it more responive and better use
const Menu = document.querySelector('.collapse_menu');
const links = document.querySelector('.links');

Menu.addEventListener('click', DisplayMenu);

function DisplayMenu(even) {
  for (let i = 0; i < Menu.childNodes.length; i++) {
    Menu.childNodes[i].classList.toggle('open');
    Menu.classList.toggle('open');
  }

  if (Menu.classList.contains('open')) {
    links.style.display = 'flex';
  } else {
    links.style.display = 'none';
  }
}
