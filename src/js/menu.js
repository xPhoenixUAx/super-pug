const openMenuButton = document.querySelector('.js-open-menu');
const mobileMenu = document.querySelector('.js-menu-container');
const closeMenuButton = document.querySelector('.js-close-menu'); // Отримуємо кнопку закриття з HTML

// Відкриття/закриття меню
openMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-open');
});

// Закриття меню при натисканні на кнопку закриття
closeMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

// Закриття меню при кліку на пункт меню
mobileMenu.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    mobileMenu.classList.remove('is-open');
  }
});
