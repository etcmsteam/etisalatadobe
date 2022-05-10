/* eslint-disable */
import { swiperInit } from "../../../global/js/swiperInitialize";

import "./index.scss";

export const TILE_BOX = () => {
  //shop swiper st
  function initTileBoxesSlider() {
    // plans table slider for CMS modules start
    $(document)
      .find(".tilecontainer .tile-boxes-section")
      .not(".tile-boxes-section-swiper")
      .not('.tile-box-2-column')
      .each(function (index) {
        $(this).addClass("t-b-slider" + index);
        var $tileBoxesCarousal = swiperInit(".t-b-slider" + index + " .swiper-container", {
          scrollbar: $(this).find(".scrollbar"),
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
      .find(".tilecontainer .tile-boxes-section.tile-boxes-section-swiper")
      .each(function (index) {
        $(this).addClass("t-b-slider" + index);
        var $tileBoxesSwiperCarousal = swiperInit(".t-b-slider" + index + " .swiper-container", {
          scrollbar: $(this).find(".swiper-scrollbar"),
          scrollbarHide: false,
          scrollbarDraggable: true,
          slidesPerView: 1,
          spaceBetween: 20,
          simulateTouch: true,
          pagination: ".swiper-pagination",
          touchEventsTarget: "swiper-wrapper",

          breakpoints: {
            540: {
              spaceBetween: 0,
              slidesPerView: 1.35,
            },
            768: {
              spaceBetween: 0,
              slidesPerView: 2.35,
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
    // plans table slider 3 tiles ends

    $(document)
      .find(".tilecontainer .tileBoxMobCarWrap")
      .each(function (itemindex) {
        var swiperSlideLength = $(this).find(".swiper-slide").length;
        $(this).addClass("swiper-with-" + swiperSlideLength + "-slides");
        if ($(window).width() > 991) {
          $(this).find(".tileboxCarousal").addClass("destroyed");
        } else {
          var $carouselSlider = swiperInit($(this).find(".tileboxCarousal"), {
            loop: false,
            autoplay: false,
            slidesPerView: 1,
            simulateTouch: true,
            pagination: ".swiper-pagination",
            touchEventsTarget: "swiper-wrapper",
            scrollbarDraggable: true,
            scrollbarHide: false,
            scrollbar: $(this).find(".table-swiper-scrollbar"),
            centeredSlides: true,
            spaceBetween: 20,
          });
        }
      });


      // Tile Box 2 Column Variation start
      $(document).find('.tileBoxModified').each(function (itemindex) {

        var swiperSlideLength = $(this).find('.swiper-slide').length;
        $(this).addClass('swiper-with-' + swiperSlideLength + '-slides');
        if ($(window).width() > 991) {
          $(this).find('.tileboxCarousal').addClass('destroyed');
        } else {
          var $carouselSlider = new Swiper($(this).find('.tileboxCarousal'), {
            loop: false,
            autoplay: false,
            slidesPerView: 1.1,
            simulateTouch: true,
            pagination: '.swiper-pagination',
            touchEventsTarget: "swiper-wrapper",
            scrollbarDraggable: true,
            scrollbarHide: false,
            scrollbar: ".table-swiper-scrollbar",
            centeredSlides: false,
            spaceBetween: 20
          });
        }
      });
      // Tile Box 2 Column Variation end
  }

  initTileBoxesSlider();
};
