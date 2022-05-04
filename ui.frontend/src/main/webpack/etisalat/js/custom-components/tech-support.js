
/* eslint-disable */
import { swiperInit } from "../../../global/js/swiperInitialize";

export const TECH_SUPPORT_MODULE = () => {
  $(".tech-support-wrapper").each(function (index) {
      $(this).addClass("tech" + index);
      const $slider = $(this);
      $slider.find(".swiper-button-next").addClass("right" + index);
      $slider.find(".swiper-button-prev").addClass("left" + index);
      const $techSlider = swiperInit(".tech" + index + " .swiper-container", {
        nextButton: ".swiper-button-next.right" + index,
        prevButton: ".swiper-button-prev.left" + index,
        scrollbarHide: false,
        scrollbarDraggable: true,
        breakpoints: {
          540: {
            spaceBetween: 16,
            slidesPerView: 1.5,
          },
          768: {
            spaceBetween: 16,
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 24,
            slidesPerView: 2,
          },
          1440: {
            spaceBetween: 24,
            slidesPerView: 3,
          },
          9999: {
            spaceBetween: 24,
            centeredSlides: false,
            slidesPerView: 3,
          },
        },
      });
    });

  // youtube video player
  const TECH_SUPPORT_BOX = $(".techsupport-slidebox");
  if (TECH_SUPPORT_BOX.length > 0) {

    $(document).on("click", ".youtube-video-link", function (e) {
      e.preventDefault();
      const MODAL_CTA = $(this).next(".techSupportVideo");
      MODAL_CTA.modal().show();

      if ($("body").hasClass("modal-open")) {
        $("body").parent().css("overflow", "hidden");
      }

      $("body").addClass("modal-overlay");
    });

    $(document).on("hidden.bs.modal", ".youtube-popup-container", function () {
      const SRC = $(this).find("iframe").attr("src");
      $(this).find("iframe").attr("src", "");
      $(this).find("iframe").attr("src", SRC.replace("autoplay=1", ""));
      $("html").removeAttr("style");

      if ($("body").hasClass("modal-overlay")) {
        $("body").removeClass("modal-overlay");
      }
    });
  }
};