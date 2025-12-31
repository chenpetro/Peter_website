  const burgerToggle = document.getElementById('burgerToggle');
  const burgerMenu = document.getElementById('burgerMenu');
  const menuItems = document.querySelectorAll('.burger_menu__item a');

  // Toggle menu and icon animation
  burgerToggle.addEventListener('click', () => {
    burgerToggle.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  });

  // Close menu when clicking a link
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      burgerToggle.classList.remove('active');
      burgerMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.burger_menu') && !e.target.closest('.burger_toggle')) {
      burgerToggle.classList.remove('active');
      burgerMenu.classList.remove('active');
    }
  });

