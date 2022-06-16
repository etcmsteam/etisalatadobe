/* eslint-disable */
import { swiperInit } from '../../../global/js/swiperInitialize';

import './index.scss';

export const TILE_BOX = () => {
  //shop swiper st
  function initTileBoxesSlider() {
    // plans table slider for CMS modules start
    $(document)
      .find('.tilecontainer .tile-boxes-section')
      .not('.tile-boxes-section-swiper')
      .each(function (index) {
        $(this).addClass('t-b-slider' + index);
        var $tileBoxesCarousal = swiperInit('.t-b-slider' + index + ' .swiper-container', {
          scrollbar: $(this).find('.scrollbar'),
          scrollbarHide: false,
          scrollbarDraggable: true,
          breakpoints: {
            540: {
              slidesPerView: 1.35,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2.35,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            9999: {
              centeredSlides: false,
              slidesPerView: 4,
              spaceBetween: 24,
            },
          },
        });
      });
    // plans table slider for CMS modules ends

    // plans table slider 3 tiles starts
    $(document)
      .find('.tilecontainer .tile-boxes-section.tile-boxes-section-swiper')
      .not('.single-tile')
      .each(function (index) {
        const container = $(this).find('.swiper-container');
        var $tileBoxesSwiperCarousal = swiperInit(container, {
          scrollbar: $(this).find('.swiper-scrollbar'),
          scrollbarHide: false,
          scrollbarDraggable: true,
          loop: false,
          autoplay: false,
          slidesPerView: 1,
          spaceBetween: 20,
          simulateTouch: true,
          pagination: '.swiper-pagination',
          touchEventsTarget: 'swiper-wrapper',

          breakpoints: {
            991: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
            1024: {
              spaceBetween: 0,
              slidesPerView: 3,
            },
            1440: {
              spaceBetween: 0,
              slidesPerView: 3,
            },
            9999: {
              spaceBetween: 0,
              centeredSlides: false,
              slidesPerView: 3,
            },
          },
        });
      });
  }

  initTileBoxesSlider();
  // open youtube video and close by removing src and then add tile box Grid
  $('.tileBoxVideoLink').on('click', function (e) {
    e.preventDefault();
    var modalCTA = $(this).next('.tileBoxVideoModal');
    $(this).closest('.swiper-wrapper').addClass('remove-transform remove-zIndex');
    $(this).closest('.swiper-container').addClass('remove-zIndex');
    if ($(this).closest('.tile-boxes-section').hasClass('four-plus-slides')) {
      $(this).closest('.tile-boxes-section').addClass('remove-sticky-pos');
    }
    modalCTA.modal().show();
    if ($('body').hasClass('modal-open')) {
      $('body').parent().css('overflow', 'hidden');
    }
    $('body').addClass('modal-overlay');
  });

  $('.tileBoxVideoModal').on('hidden.bs.modal', function () {
    var src = $(this).find('iframe').attr('src');
    $(this).find('iframe').attr('src', '');
    $(this).find('iframe').attr('src', src.replace('autoplay=1', ''));
    $('html').removeAttr('style');
    if ($('body').hasClass('modal-overlay')) {
      $('body').removeClass('modal-overlay');
    }
    $(this).closest('.swiper-wrapper').removeClass('remove-transform remove-zIndex');
    $(this).closest('.swiper-container').removeClass('remove-zIndex');
    if ($(this).closest('.tile-boxes-section').hasClass('remove-sticky-pos')) {
      $(this).closest('.tile-boxes-section').removeClass('remove-sticky-pos');
    }
  });

  //open youtube video and close by removing src and then add three tile box
};
