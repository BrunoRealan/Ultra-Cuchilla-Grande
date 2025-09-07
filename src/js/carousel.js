document.addEventListener('DOMContentLoaded', function () {
  const firstCarousel = new Splide('.first-carousel', {
    type: 'loop',
    perPage: 3, // Default: 3 slides visible
    breakpoints: {
      1024: { perPage: 2 }, // 2 slides for screens <= 1024px
      640: { perPage: 1 },  // 1 slide for screens <= 640px
    },
    gap: '0.5rem', // Space between slides
    autoplay: true,
    interval: 5000,
  }).mount();

  const secondCarousel = new Splide('.second-carousel', {
    type: 'loop',
    perPage: 3, // Default: 3 slides visible
    breakpoints: {
      1024: { perPage: 2 }, // 2 slides for screens <= 1024px
      640: { perPage: 1 },  // 1 slide for screens <= 640px
    },
    gap: '0.5rem', // Space between slides
    autoplay: true,
    interval: 5000,
  }).mount();
});