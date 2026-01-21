// assets/js/scroll-animations.js

document.addEventListener('DOMContentLoaded', function() {
  // Конфигурация Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  // Callback для observer
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // Опционально: отключаем наблюдение после анимации
        // observer.unobserve(entry.target);
      }
    });
  };

  // Создаем observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Элементы для анимации
  const animatedElements = document.querySelectorAll(`
    .hero__content,
    .solution-section__title,
    .solution-section__text,
    .solution-section__subtitle,
    .solution-section__advantage,
    .solution-section__image-wrapper,
    .infrastructure__header,
    .infrastructure__card,
    .contacts__info,
    .contacts__map
  `);

  // Добавляем задержки для последовательной анимации
  animatedElements.forEach((element, index) => {
    // Определяем тип анимации на основе класса
    if (element.classList.contains('hero__content')) {
      element.classList.add('fade-up');
    } else if (element.classList.contains('solution-section__title')) {
      element.classList.add('fade-down');
    } else if (element.classList.contains('solution-section__text')) {
      element.classList.add('fade-left');
    } else if (element.classList.contains('solution-section__subtitle')) {
      element.classList.add('fade-up');
    } else if (element.classList.contains('solution-section__advantage')) {
      element.classList.add('scale-in');
      // Добавляем индивидуальную задержку для карточек преимуществ
      const advantageIndex = Array.from(element.parentElement.children).indexOf(element);
      element.style.transitionDelay = `${advantageIndex * 0.1}s`;
    } else if (element.classList.contains('solution-section__image-wrapper')) {
      element.classList.add('fade-up');
      // Добавляем индивидуальную задержку для изображений
      const imageIndex = Array.from(element.parentElement.children).indexOf(element);
      element.style.transitionDelay = `${imageIndex * 0.15}s`;
    } else if (element.classList.contains('infrastructure__header')) {
      element.classList.add('fade-down');
    } else if (element.classList.contains('infrastructure__card')) {
      element.classList.add('fade-up');
      // Добавляем индивидуальную задержку для карточек инфраструктуры
      const cardIndex = Array.from(element.parentElement.children).indexOf(element);
      element.style.transitionDelay = `${cardIndex * 0.1}s`;
    } else if (element.classList.contains('contacts__info')) {
      element.classList.add('fade-right');
    } else if (element.classList.contains('contacts__map')) {
      element.classList.add('fade-left');
    } else {
      element.classList.add('fade-up');
    }

    // Начинаем наблюдение
    observer.observe(element);
  });

  // Специальная обработка для элементов внутри contacts__items
  const contactItems = document.querySelectorAll('.contacts__item');
  contactItems.forEach((item, index) => {
    item.classList.add('fade-left');
    item.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(item);
  });
});