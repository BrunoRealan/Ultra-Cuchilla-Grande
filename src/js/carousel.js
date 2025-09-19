document.addEventListener('DOMContentLoaded', function () {
  const first = document.querySelector('.first-carousel');
  if (first) {
    new Splide(first, {
      type: 'loop',
      perPage: 3,
      breakpoints: {
        1024: { perPage: 2 },
        640: { perPage: 1 },
      },
      gap: '0.5rem',
      autoplay: true,
      interval: 5000,
    }).mount();
  }

  const second = document.querySelector('.second-carousel');
  if (second) {
    new Splide(second, {
      type: 'loop',
      perPage: 3,
      breakpoints: {
        1024: { perPage: 2 },
        640: { perPage: 1 },
      },
      gap: '0.5rem',
      autoplay: true,
      interval: 5000,
    }).mount();
  }

  const third = document.querySelector('.third-carousel');
  if (third) {
    new Splide(third, {
      type: 'loop',
      perPage: 3,
      breakpoints: {
        1024: { perPage: 2 },
        640: { perPage: 1 },
      },
      gap: '0.5rem',
      autoplay: true,
      interval: 5000,
    }).mount();
  }

  const kit = document.querySelector('.kit-carousel');
  if (kit) {
    new Splide(kit, {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 5000,
      gap: '0.5rem',
    }).mount();
  }
});