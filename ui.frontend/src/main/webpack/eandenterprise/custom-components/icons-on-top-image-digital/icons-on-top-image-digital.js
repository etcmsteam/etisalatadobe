import $ from 'jquery';
import Swiper from 'swiper';

export const ICONS_ON_TOP_IMAGE_DIGITAL = () => {
  function initMobileCarousel() {
      // Swiper: Slider
      new Swiper('.icons-on-top-image-2-0 .tabs', {
        loop: false,
        autoplay: false,
        slidesPerView: 5,
        simulateTouch: true,
        touchEventsTarget: 'swiper-wrapper',
        spaceBetween: 24,
        slideToClickedSlide: true,
        breakpoints: {
          1240: {
            slidesPerView: 4.8,
            spaceBetween: 24,
          },
          768: {
            centeredSlides: true,
            slidesPerView: 1.8,
            spaceBetween: 24,
          },
          419: {
            centeredSlides: true,
            slidesPerView: 1.5,
            spaceBetween: 24,
          },
        },
      });
  }

  initMobileCarousel();
  $('.icons-on-top-image-2-0 .tab-head-wrapper .nav-tabs li>a').on('click', function () {
    var imgActive = $(this).attr('aria-controls');
    $('.icons-on-top-image-2-0 .tab-content .tab-pane#' + imgActive)
      .siblings()
      .removeClass('animate-content');
    setTimeout(function () {
      $('.icons-on-top-image-2-0 .tab-content .tab-pane#' + imgActive).addClass('animate-content');
    }, 100);
  });
};
