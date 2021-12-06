if ($(".globalfootprintcontainer").length > 0) {
  var galleryTop = new Swiper('.swiper-gallery-slide', {
    spaceBetween: 10,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    loopedSlides: 16,
    breakpoints: {
      991: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
  });
  var galleryThumbs = new Swiper('.swiper-gallery-thumbs', {
    spaceBetween: 10,
    speed:900,
    centeredSlides: false,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 16,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      991: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
}

if ($(window).width() <= 768) {
  const ANDRIOD_CTA = $(".download1");
  const APPLE_CTA = $(".download2");

  if (navigator.userAgent.indexOf("Android") !== -1) {
    ANDRIOD_CTA.show();
    APPLE_CTA.hide();
  }

  if (navigator.userAgent.indexOf("iPhone") !== -1 || navigator.userAgent.indexOf("iPad") !== -1) {
    ANDRIOD_CTA.hide();
    APPLE_CTA.show();
  }
}