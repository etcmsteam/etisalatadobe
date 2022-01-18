import {isMobile, IsMediaQuery} from '../helpers'
import { swiperInit } from "../swiperInitialize";

if ($(".globalfootprintcontainer").length > 0) {
  var galleryTop = swiperInit('.swiper-gallery-slide', {
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
  var galleryThumbs = swiperInit('.swiper-gallery-thumbs', {
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

if (!IsMediaQuery.md.matches) {
  const ANDRIOD_CTA = $(".download1");
  const APPLE_CTA = $(".download2");

  if (isMobile.Android()) {
    ANDRIOD_CTA.show();
    APPLE_CTA.hide();
  }

  if (isMobile.iOS()) {
    ANDRIOD_CTA.hide();
    APPLE_CTA.show();
  }
}