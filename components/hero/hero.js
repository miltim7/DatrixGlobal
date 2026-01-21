// components/hero/hero.js

document.addEventListener('DOMContentLoaded', function() {
  const scrollIcon = document.querySelector('.hero__scroll');
  
  if (scrollIcon) {
    scrollIcon.addEventListener('click', function() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }
});