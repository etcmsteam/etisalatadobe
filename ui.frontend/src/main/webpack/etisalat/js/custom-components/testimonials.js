import { swiperInit } from "../swiperInitialize";

function initSwiper() {
  $(document)
    .find(".testimonial-module.testimonialSlider")
    .each(function (index) {
      $(this).addClass("slider" + index);
      var $planTableParent = $(this);
      $planTableParent.find(".controls .next").addClass("slider" + index);
      $planTableParent.find(".controls .prev").addClass("slider" + index);
      var $testimonialSlider = swiperInit(".slider" + index + " .swiper-container", {
        loop: false,
        autoplay: false,
        touchEventsTarget: "swiper-wrapper",
        simulateTouch: true,
        scrollbar: $(this).find(".swiper-scrollbar"),
        nextButton: ".next.slider" + index,
        prevButton: ".prev.slider" + index,
        scrollbarHide: false,
        scrollbarDraggable: true,
        spaceBetween: 24,
        breakpoints: {
          540: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 2,
          },
          9999: {
            centeredSlides: false,
            slidesPerView: 2,
          },
        },
      });

      if (window.outerWidth > 992) {
        if ($(this).find(".swiper-slide").length < 3) {
          $(this).find(".controls").css("display", "none");
        }
      }
    });
}

$(document).ready(function () {
  initSwiper();
});
