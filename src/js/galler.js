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
        updatePagination(this);
      },
      slideChange: function () {
        updatePagination(this);
      },
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
    },
  });

  function updatePagination(swiper) {
    const isDesktop = window.innerWidth >= 1200;
    const dots = document.querySelectorAll('.slider-dots .dot');

    if (isDesktop) {
  
      dots.forEach(dot => dot.classList.remove('active'));

      
      const currentGroup = Math.floor(swiper.activeIndex / 3);
      const totalGroups = Math.ceil(swiper.slides.length / 3);

      
      const safeCurrentGroup = Math.min(currentGroup, totalGroups - 1);

      
      if (dots[safeCurrentGroup]) {
        dots[safeCurrentGroup].classList.add('active');
      }
    } else {
      
      const progressBar = document.querySelector('.progress-bar-custom');
      const redDot = document.querySelector('.red-dot-custom');
      if (!progressBar || !redDot) return;

      const totalSlides = swiper.slides.length;
      const progress = swiper.activeIndex / (totalSlides - 1);
      const barWidth = progressBar.offsetWidth;

      redDot.style.left = `${Math.max(
        0,
        Math.min(progress * barWidth, barWidth)
      )}px`;
    }
  }

  // Добавляем обработчики кликов по точкам
  const dots = document.querySelectorAll('.slider-dots .dot');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const slidesPerGroup = window.innerWidth >= 1200 ? 3 : 1;
      gallerySwiper.slideTo(index * slidesPerGroup);
    });
  });

  // Обработка изменения размера окна
  window.addEventListener('resize', () => {
    updatePagination(gallerySwiper);
  });
});
