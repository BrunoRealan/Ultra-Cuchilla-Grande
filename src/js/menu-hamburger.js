    const btn = document.querySelector('button[aria-controls="mobile-menu"]');
    const menu = document.getElementById('mobile-menu');
    const open = document.getElementById('icon-open');
    const close = document.getElementById('icon-close');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      open.classList.toggle('hidden');
      close.classList.toggle('hidden');
    });