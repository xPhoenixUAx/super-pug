import Swiper from 'swiper';
import { Navigation, Pagination, Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  // Инициализация слайдера для картинок
  const imageSwiper = new Swiper('.advantages-image-swiper', {
    modules: [Navigation, Pagination, Controller],
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-advantages-next',
      prevEl: '.swiper-button-advantages-prev',
    },
    on: {
      init: function () {
        createCustomPagination(this);
      },
      slideChange: function () {
        updateCustomPagination(this);
      },
    },
  });

  // Инициализация слайдера для текста
  const textSwiper = new Swiper('.advantages-text-swiper', {
    modules: [Controller],
    slidesPerView: 1,
    spaceBetween: 30,
  });

  // Синхронизация слайдеров
  imageSwiper.controller.control = textSwiper;
  textSwiper.controller.control = imageSwiper;
});

// Функция создания кастомной пагинации
function createCustomPagination(swiper) {
  const paginationContainer = document.querySelector('.swiper-pagination');
  if (!paginationContainer) return;

  paginationContainer.innerHTML = ''; // Очищаем контейнер

  swiper.slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('pagination-dot');
    if (index === swiper.activeIndex) dot.classList.add('active');

    // Добавляем обработчик клика
    dot.addEventListener('click', () => {
      swiper.slideTo(index);
    });

    paginationContainer.appendChild(dot);
  });
}

// Функция обновления кастомной пагинации
function updateCustomPagination(swiper) {
  const dots = document.querySelectorAll('.pagination-dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === swiper.activeIndex);
  });
}
