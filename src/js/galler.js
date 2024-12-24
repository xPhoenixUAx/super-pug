import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const gallerySwiper = new Swiper('.gallery-swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,

  // Добавляем параметры для плавности
  speed: 800, // Скорость анимации прокрутки (в мс)
  effect: 'slide', // Эффект перехода
  easing: 'ease-in-out', // Функция плавности

  // Добавляем автоматическую прокрутку с задержкой
  autoplay: {
    delay: 3000, // Задержка между прокруткой (в мс)
    disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия пользователя
  },

  // Настройка кнопок навигации с новыми классами
  navigation: {
    nextEl: '.swiper-button-gallery-next',
    prevEl: '.swiper-button-gallery-prev',
  },

  // Настройки для разных размеров экрана
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 110,
      slidesPerGroup: 3,
    },
  },
});

// Обработка точек навигации
const dots = document.querySelectorAll('.slider-dots-gallery .dot');
const totalSlides = document.querySelectorAll(
  '.gallery-swiper .swiper-slide'
).length;
const slidesPerPage = 3; // Количество видимых слайдов на странице
const totalPages = Math.ceil(totalSlides / slidesPerPage);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Убираем активный класс у всех точек
    dots.forEach(d => d.classList.remove('active'));
    // Добавляем активный класс текущей точке
    dot.classList.add('active');

    // Переключаем на нужный слайд с учетом группировки
    const slideIndex = index * slidesPerPage;
    gallerySwiper.slideTo(slideIndex);
  });
});

// Обновление активной точки при смене слайда
gallerySwiper.on('slideChange', () => {
  const currentPage = Math.floor(gallerySwiper.realIndex / slidesPerPage);
  dots.forEach((dot, index) => {
    if (index === currentPage) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
});
