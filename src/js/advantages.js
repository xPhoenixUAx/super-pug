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

  const prevButton = document.querySelector('.swiper-button-advantages-prev');
  const nextButton = document.querySelector('.swiper-button-advantages-next');
  const radioInputs = document.querySelectorAll('#slider input[type="radio"]');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const textSlides = document.querySelectorAll('.slide-text');
  const isMobile = window.innerWidth < 1200;

  function updateDots(activeIndex) {
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  }

  function updateTextSlide(activeIndex) {
    textSlides.forEach((slide, index) => {
      if (index === activeIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function getCurrentSlideIndex() {
    for (let i = 0; i < radioInputs.length; i++) {
      if (radioInputs[i].checked) {
        return i;
      }
    }
    return 0;
  }

  function showSlide(index) {
    if (index >= 0 && index < radioInputs.length) {
      console.log(`Switching to slide index: ${index}`);
      radioInputs[index].checked = true;
      updateDots(index);
      updateTextSlide(index);
    }
  }

  // Добавляем клики по точкам
  dots.forEach((dot, index) => {
    dot.addEventListener('click', e => {
      e.preventDefault();
      showSlide(index);
    });
  });

  prevButton.addEventListener('click', e => {
    e.preventDefault();
    const currentIndex = getCurrentSlideIndex();
    const prevIndex =
      currentIndex === 0 ? radioInputs.length - 1 : currentIndex - 1;
    console.log(
      `Previous button clicked. Current index: ${currentIndex}, Previous index: ${prevIndex}`
    );
    showSlide(prevIndex);
  });

  nextButton.addEventListener('click', e => {
    e.preventDefault();
    const currentIndex = getCurrentSlideIndex();
    const nextIndex =
      currentIndex === radioInputs.length - 1 ? 0 : currentIndex + 1;
    console.log(
      `Next button clicked. Current index: ${currentIndex}, Next index: ${nextIndex}`
    );
    showSlide(nextIndex);
  });

  // Добавляем управление с клавиатуры
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') {
      prevButton.click();
    } else if (e.key === 'ArrowRight') {
      nextButton.click();
    }
  });

  // Инициализация начального состояния
  updateDots(getCurrentSlideIndex());
  updateTextSlide(getCurrentSlideIndex());
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
