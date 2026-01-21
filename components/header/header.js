// components\header\header.js

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  const menuLinks = document.querySelectorAll('.header__menu-link');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      burger.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
      
      menuLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});