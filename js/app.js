document.addEventListener('DOMContentLoaded', () => {

  /* FIXED_HEADER */
  window.onscroll = () => {
    const header = document.querySelector('.header'),
          scrollY = window.scrollY;

    if (scrollY > 30) {
      header.classList.add('fixed');
    } else if (scrollY < 30) {
      header.classList.remove('fixed');
    }

  };


  
  

  /* BURGER */
  let burger = document.querySelector('.burger'),
      navMenu = document.querySelector('.nav_menu'),
      navlink = document.querySelectorAll('.nav_link'),
      clickBg = document.getElementById('click_bg'),
      body = document.getElementsByTagName('body'),
      popupMenu = document.getElementById('popup_menu_img'),
      menuImg = document.querySelectorAll('.menu_img'),
      starterSub = document.querySelectorAll('.starter_subtitle'),
      starterImg = document.querySelectorAll('.menu_starter'),
      mainSub = document.querySelectorAll('.main_subtitle'),
      mainImg = document.querySelectorAll('.menu_main'),
      dessertSub = document.querySelectorAll('.dessert_subtitle'),
      dessertImg = document.querySelectorAll('.menu_dessert'),
      drinkSub = document.querySelectorAll('.drink_subtitle'),
      drinkImg = document.querySelectorAll('.menu_drink'),
      clickBgMenu = document.getElementById('click_bg_menu');

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

    /* POPUP_MENU */
    for (let i=0; starterSub.length > i; ++i) {
      starterSub[i].addEventListener('click', (event) => {
        for (let i=0; starterImg.length > i; ++i) {
          starterImg[i].classList.remove('active');
        }
        starterImg[i].classList.toggle('active');
        popupMenu.classList.add('active');
        body[0].classList.add('block');
        clickBgMenu.classList.add('active');
      })
    };

    for (let i=0; mainSub.length > i; ++i) {
      mainSub[i].addEventListener('click', (event) => {
        for (let i=0; mainImg.length > i; ++i) {
          mainImg[i].classList.remove('active');
        }
        mainImg[i].classList.toggle('active');
        popupMenu.classList.add('active');
        body[0].classList.add('block');
        clickBgMenu.classList.add('active');
      })
    };
    
    for (let i=0; dessertSub.length > i; ++i) {
      dessertSub[i].addEventListener('click', (event) => {
        for (let i=0; dessertImg.length > i; ++i) {
          dessertImg[i].classList.remove('active');
        }
        dessertImg[i].classList.toggle('active');
        popupMenu.classList.add('active');
        body[0].classList.add('block');
        clickBgMenu.classList.add('active');
      })
    };

    for (let i=0; drinkSub.length > i; ++i) {
      drinkSub[i].addEventListener('click', (event) => {
        for (let i=0; drinkImg.length > i; ++i) {
          drinkImg[i].classList.remove('active');
        }
        drinkImg[i].classList.toggle('active');
        popupMenu.classList.add('active');
        body[0].classList.add('block');
        clickBgMenu.classList.add('active');
      })
    };
    
    clickBgMenu.addEventListener('click', () => {
      for (let i=0; menuImg.length > i; ++i) {
        menuImg[i].classList.remove('active');
      }
      event.currentTarget.classList.remove('active');
      popupMenu.classList.remove('active');
      body[0].classList.remove('block');
    });
  };

  


  /* LINKS */
  const navInit = ()   => {
    const links = document.querySelectorAll('.nav_link'),
          section = document.querySelectorAll('.section'),
          header = document.querySelector('.header');

    if (window.innerWidth < 1023) {
      section.forEach(section => {
        if (window.pageYOffset + header.offsetHeight + 50 >= section.offsetTop) {
          links.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === section.dataset.section) {
              link.classList.add('active');
            }
          })
        };
      })
    } else {
      section.forEach(section => {
        if (window.pageYOffset + 200 >= section.offsetTop) {
          links.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === section.dataset.section) {
              link.classList.add('active');
            }
          })
        };
      })
    }
  };
  navInit();
  window.addEventListener('scroll', () => {
    navInit();
  });
  window.addEventListener('resize', () => {
    navInit();
  });









  /* SLIDER_PLACE */
  const swiperPlace = new Swiper('.place_container', {
    loop: true,
    speed: 1000,
    parallax: true,
    pagination: {
      el: '.swiper-pagination-place',
      type: 'fraction',
      clickable: false
    }
  });


  /* SLIDER_MENU */
  const swiperMenu = new Swiper('.menu_container', {
    loop: false,
    speed: 1000,
    spaceBetween: 100,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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
        header = document.querySelector('.header'),
        section = $('.section');

    if ($(window).width() < 1024) {
      let blockOffset = $(blockId).offset().top - header.offsetHeight;

      $("html, body").animate ({
        scrollTop: blockOffset
      }, 900);
    } else {
      let blockOffset = $(blockId).offset().top;

      $("html, body").animate ({
        scrollTop: blockOffset
      }, 900);
    }
    
  })
})