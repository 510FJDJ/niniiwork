
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.6,
    spaceBetween: 80,
    centeredSlides: true,
    cssMode: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      992: {
        slidesPerView: 1.6, 
      },
      0: {
        slidesPerView: 1.1, 
      },
    },
    mousewheel: true,
    keyboard: true,
  });
  