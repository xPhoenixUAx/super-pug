const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const benefitsItems = document.querySelectorAll('.benefits__item');
  benefitsItems.forEach(item => observer.observe(item));
});
