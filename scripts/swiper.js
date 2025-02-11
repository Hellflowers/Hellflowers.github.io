const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    slidesPerView: 1,
    breakpoints:{
      768: {
        slidesPerView: 2,
      },
      1260: {
        slidesPerView: 3,
      }
    },
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
   speed: 20000,
   spaceBetween:0,
   freeMode: true,
  });
