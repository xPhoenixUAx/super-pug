import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const gallerySwiper = new Swiper('.gallery-swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,

  speed: 800,
  effect: 'slide',
  easing: 'ease-in-out',

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-gallery-next',
    prevEl: '.swiper-button-gallery-prev',
  },

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
  },

  on: {
    slideChange: function () {
      const dots = document.querySelectorAll('.slider-dots-gallery .dot');
      const isDesktop = window.innerWidth >= 1200;

      if (isDesktop) {
        // Логика для десктопа (группы по 3 слайда)
        const currentPage = Math.floor(this.realIndex / 3);
        dots.forEach((dot, index) => {
          if (index === currentPage) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      } else {
        // Логика для мобильной версии (по одному слайду)
        dots.forEach((dot, index) => {
          if (index === this.realIndex) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }
    },
  },
});

const dots = document.querySelectorAll('.slider-dots-gallery .dot');
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    const isDesktop = window.innerWidth >= 1200;
    if (isDesktop) {
      gallerySwiper.slideTo(index * 3);
    } else {
      gallerySwiper.slideTo(index);
    }
  });
});
