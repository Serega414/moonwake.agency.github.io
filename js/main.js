$(function () {

  $('.header__burger').on('click', function () {
    $('.header__burger,.header__top-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.btn-form, .color-box').on('click', function () {
    $('.btn-form, .color-box').toggleClass('active');
    $('.form__new').toggleClass('active');
  });


  $(".testimonials-slider").slick({
    dots: true,
    adaptiveHeight: true,
    appendArrows: ".testimonials",
    prevArrow:
      '<button class="slick-arrow slick-prev "><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button class="slick-arrow slick-next "><img src="images/icons/arrow-right.svg" alt=""></button>',
    infinite: true,
    speed: 600,
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 880,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ]
  });


  $('.logotips__inner').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
     autoplay: true, 
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px 0px 50px',
        },
      },
    ]
  });

  new WOW().init();
/* 
  $(document).ready(function() {
    // Замените 'yourBlockID' на идентификатор вашего блока
    let $btn__videoContentInner = $('#btn__videoContentInner');
  
    $btn__videoContentInner.scroll(function (event) {
        let top = $btn__videoContentInner.scrollTop();
        if (top >= 30) {
            // Добавить класс 'btn' при прокрутке блока
            $('#btn-form').addClass('btn-form');
        } else {
            // Удалить класс 'btn' при возврате вверх
            $('#btn-form').removeClass('btn-form');
        }
    });
  }); */

  $(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
      $(".header-top").css("background-color", "rgb(0 0 0 / 80%)")
    } else {
      $(".header-top").css("background-color", "rgb(0 0 0)")
    }
  });


});



