document.addEventListener('DOMContentLoaded', () => {

  /* BURGER */
  let burger = document.querySelector('.burger'),
      navMenu = document.querySelector('.nav_menu'),
      navlink = document.querySelectorAll('.nav_link'),
      clickBg = document.getElementById('click_bg'),
      body = document.getElementsByTagName('body');

  burger.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    navMenu.classList.toggle('active');
    body[0].classList.toggle('block');
    clickBg.classList.toggle('active');
  });

  /* CLOSE NAV ON BG CLICK */
  clickBg.addEventListener('click', (event) => {
    event.currentTarget.classList.remove('active');
    burger.classList.remove('active');
    navMenu.classList.remove('active');
    body[0].classList.remove('block');
  });

  /* CLOSE NAV ON LINKS CLICK */
  for (let i=0; navlink.length > i; ++i) {
    navlink[i].addEventListener('click', (event) => {
      event.preventDefault();
      navMenu.classList.remove('active');
      body[0].classList.remove('block');
      burger.classList.remove('active'); 
      clickBg.classList.remove('active');
  })
  };




  /* LINKS */
  const navInit = ()   => {
    const links = document.querySelectorAll('.nav_link'),
          section = document.querySelectorAll('.section'),
          intro = document.getElementById('intro');

    section.forEach(section => {
      if (window.pageYOffset >= section.offsetTop) {
        links.forEach(link => {
          link.classList.remove('active');
          if (link.dataset.section === section.dataset.section) {
            link.classList.add('active');
          }
        })
      };
    })
  };
  navInit();
  window.addEventListener('scroll', () => {
    navInit();
  });
  window.addEventListener('resize', () => {
    navInit();
  });









  /* SLIDER_MENU */
  const swiperMenu = new Swiper('.menu_container', {
    loop: false,
    speed: 1000,
    spaceBetween: 100,
    mousewheel: {
      invert: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    }
  });





  /* SLIDER_BG */
  const swiperBg = new Swiper('.slider_bg_container', {
    loop: true,
    parallax: true,
    allowTouchMove: false,
    autoplay: {
      delay: 6000,
    },
    speed: 2000,
    breakpoints: {
      576: {
        slidesPerView: 2,
        parallax: false,
      },
      992: {
        slidesPerView: 3,
        parallax: false,
      },
      1200: {
        slidesPerView: 4,
        parallax: false,
      },
    }
  });

});




/* SCROLL */
$(function() {
  $("[data-scroll").click(function(event) {
    event.preventDefault();

    let blockId = $(this).data('scroll'),
        section = $('.section'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate ({
      scrollTop: blockOffset
    }, 900);
  })
})