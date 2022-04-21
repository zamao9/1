document.addEventListener('DOMContentLoaded', () => {

  /* SLIDER_BG */
  const swiperBg = new Swiper('.slider_bg_container', {
    loop: true,
    autoplay: {
      delay: 6000
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    allowTouchMove: false,
  });

})