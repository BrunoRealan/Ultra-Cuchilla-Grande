const menu = document.getElementById('mobile-menu');
const openBtn = document.getElementById('icon-open');
const closeBtn = document.getElementById('icon-close');

openBtn.addEventListener('click', () => {
  menu.classList.remove('hidden', 'scale-y-0', 'opacity-0');
  menu.classList.add('scale-y-100', 'opacity-100');
  openBtn.classList.add('hidden');
  closeBtn.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('scale-y-100', 'opacity-100');
  menu.classList.add('scale-y-0', 'opacity-0');
  setTimeout(() => menu.classList.add('hidden'), 300); // espera la transición
  closeBtn.classList.add('hidden');
  openBtn.classList.remove('hidden');
});