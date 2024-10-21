
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

  //初始化parallax 插件
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);


  document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.count');
    const speed = 1800; // 調整速度（數字越小，速度越快）

    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target'); // 取得指定的目標數字
        const count = +counter.innerText; // 目前的數字
        const increment = target / speed; // 設定遞增量

        if (count < target) {
            counter.innerText = Math.ceil(count + increment); // 不斷增加數字
            setTimeout(() => countUp(counter), 30); // 每隔30ms更新一次
        } else {
            counter.innerText = target; // 完成後直接設為目標數字
        }
    };

    // 每次進入視窗都觸發
    const resetCount = (counter) => {
      counter.innerText = 0; // 重設數字回到0
  };

    // 使用 IntersectionObserver 來偵測數字元素進入視窗時才觸發
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
              resetCount(entry.target); // 先重置數字為0
              countUp(entry.target); // 再觸發動畫
            }
        });
    }, { threshold: 1.0 }); // 確保整個元素進入視窗時觸發

    counters.forEach(counter => {
        observer.observe(counter); // 觀察每個數字元素
    });
});
