function adjustNavForDevice() {
  const navLinks = document.querySelector('.nav-links');
  const width = window.innerWidth;

  // Clear previous device classes
  navLinks.classList.remove('mobile-nav', 'tablet-nav', 'desktop-nav');

  if (width <= 768) {
    // Mobile
    navLinks.classList.add('mobile-nav');
  } else if (width <= 1024) {
    // Tablet
    navLinks.classList.add('tablet-nav');
  } else {
    // Desktop
    navLinks.classList.add('desktop-nav');
  }
}

window.addEventListener('load', adjustNavForDevice);
window.addEventListener('resize', adjustNavForDevice);
