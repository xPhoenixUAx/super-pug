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
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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
