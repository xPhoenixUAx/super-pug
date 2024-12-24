import './js/menu';
import './js/galler';
import './js/advantages';
import './js/animation';

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll(
    '.about_img_item img, .about__content_img_bottom img'
  );

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Прекращаем наблюдение после появления
      }
    });
  }, observerOptions);

  images.forEach(image => {
    imageObserver.observe(image);
  });
});
