// import "./stylesheet/all.css";
// console.log("main.js 文件已成功載入！");

// document.addEventListener("DOMContentLoaded", () => {
//     const header = document.querySelector("header");
//     header.innerHTML = "<h1>你好！歡迎來到我的作品集</h1>";
// });
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.3,
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
        slidesPerView: 1.3, // 較大螢幕的設置
      },
      0: {
        slidesPerView: 1.1, // 手機版的設置，顯示一個內容
      },
    },
    mousewheel: true,
    keyboard: true,
  });