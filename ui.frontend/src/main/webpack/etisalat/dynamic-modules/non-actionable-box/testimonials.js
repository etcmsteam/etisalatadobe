import { swiperInit } from "../../../global/js/swiperInitialize";
/* eslint-disable */
export const NON_ACTIONABLE_BOX_TESTIMONIAL = () => {
  let TESTIMONIAL_MODULE = $(document).find(".testimonial-module.testimonialSlider");

  if (TESTIMONIAL_MODULE.length > 0) {
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
              spaceBetween: 24,
            },
            1440: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            9999: {
              centeredSlides: false,
              slidesPerView: 2,
              spaceBetween: 24,
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
};
