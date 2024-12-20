import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  const gallerySwiper = new Swiper('.gallery-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function () {
        updateProgressBar(this);
      },
      slideChange: function () {
        updateProgressBar(this);
      },
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // Функция обновления прогресс-бара
  function updateProgressBar(swiper) {
    const progressBar = document.querySelector('.progress-bar-custom');
    const redDot = document.querySelector('.red-dot-custom');
    if (!progressBar || !redDot) return;

    const totalSlides = swiper.slides.length;
    const progress = swiper.activeIndex / (totalSlides - 1); // Рассчитываем прогресс
    const barWidth = progressBar.offsetWidth;

    // Устанавливаем положение красной точки
    redDot.style.left = `${progress * barWidth}px`;
  }
});
