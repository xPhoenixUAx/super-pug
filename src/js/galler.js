import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const gallerySwiper = new Swiper('.gallery-swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  slidesPerGroup: 3,
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

const dots = document.querySelectorAll('.slider-dots-gallery .dot');
const totalSlides = document.querySelectorAll(
  '.gallery-swiper .swiper-slide'
).length;
const slidesPerPage = 3; 
const totalPages = Math.ceil(totalSlides / slidesPerPage);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');

    const slideIndex = index * slidesPerPage;
    gallerySwiper.slideTo(slideIndex);
  });
});

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
