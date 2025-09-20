document.addEventListener('DOMContentLoaded', function () {
  // Inicializar Splide para los diferentes carruseles
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
      type: 'slide',
      perPage: 3,
      arrows: false,
      pagination: false,
      breakpoints: {
        1024: { perPage: 2, type: 'loop', arrows: true, pagination: true },
        640: { perPage: 1, type: 'loop', arrows: true, pagination: true },
      },
      gap: '0.5rem',
      autoplay: true,
      interval: 5000,
    }).mount();
  }

  const map100k = document.querySelector('.map-100k-carousel');
  if (map100k) {
    new Splide(map100k, {
      type: 'slide',
      perPage: 1,
      arrows: true,
      pagination: true,
      gap: '1rem',
    }).mount();
  }

  const map50k = document.querySelector('.map-50k-carousel');
  if (map50k) {
    new Splide(map50k, {
      type: 'slide',
      perPage: 1,
      arrows: false,
      pagination: false,
      gap: '1rem',
    }).mount();
  }

  const map36k = document.querySelector('.map-36k-carousel');
  if (map36k) {
    new Splide(map36k, {
      type: 'slide',
      perPage: 1,
      arrows: false,
      pagination: false,
      gap: '1rem',
    }).mount();
  }

  const map10k = document.querySelector('.map-10k-carousel');
  if (map10k) {
    new Splide(map10k, {
      type: 'slide',
      perPage: 1,
      arrows: false,
      pagination: false,
      gap: '1rem',
    }).mount();
  }

  const elevation100k = document.querySelector('.elevation-100k-carousel');
  if (elevation100k) {
    new Splide(elevation100k, {
      type: 'slide',
      perPage: 1,
      arrows: true,
      pagination: false,
      gap: '1rem',
    }).mount();
  }

  const elevation50k = document.querySelector('.elevation-50k-carousel');
  if (elevation50k) {
    new Splide(elevation50k, {
      type: 'slide',
      perPage: 1,
      arrows: false,
      pagination: false,
      gap: '1rem',
    }).mount();
  }
  const elevation36k = document.querySelector('.elevation-36k-carousel');
  if (elevation36k) {
    new Splide(elevation36k, {
      type: 'slide',
      perPage: 1,
      arrows: false,
      pagination: false,
      gap: '1rem',
    }).mount();
  }

  const elevation10k = document.querySelector('.elevation-10k-carousel');
  if (elevation10k) {
    new Splide(elevation10k, {
      type: 'slide',
      perPage: 1,
      arrows: false,
      pagination: false,
      gap: '1rem',
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