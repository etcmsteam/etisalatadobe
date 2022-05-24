import { swiperInit } from "../../../global/js/swiperInitialize";
import { IsMediaQuery } from "../../../global/js/helpers";

/* eslint-disable */
export const CONTEXT_NAVIGATION_CARDS = () => {
  console.log(IsMediaQuery.md, IsMediaQuery.md.matches);
  function initSwiper() {
    $(document)
      .find(".context-navigation")
      .each(function (index) {
        if ($(window).width() < 767) {
          $(this).find(".swiper-container").addClass("destroyed");
          $(this).find(".table-swiper-button-next").addClass("hidden");
          $(this).find(".table-swiper-button-prev").addClass("hidden");
        } else {
          $(this).addClass("s" + index);
          var $planTableParent = $(this);
          $planTableParent.find(".table-swiper-button-next").addClass("r" + index);
          $planTableParent.find(".table-swiper-button-prev").addClass("l" + index);

          var $carouselSliderContextNav = swiperInit(".s" + index + " .swiper-container", {
            loop: false,
            autoplay: false,
            touchEventsTarget: "swiper-wrapper",
            simulateTouch: true,
            scrollbar: $(this).find(".table-swiper-scrollbar"),
            nextButton: ".table-swiper-button-next.r" + index,
            prevButton: ".table-swiper-button-prev.l" + index,
            scrollbarHide: false,
            scrollbarDraggable: true,
            breakpoints: {
              540: {
                spaceBetweenSlides: 60,
                slidesPerView: 1,
              },
              768: {
                spaceBetweenSlides: 60,
                slidesPerView: 2,
              },
              1024: {
                spaceBetweenSlides: 60,
                slidesPerView: 2,
              },
              1440: {
                centeredSlides: false,
                slidesPerView: 3,
              },
              9999: {
                centeredSlides: false,
                slidesPerView: 3,
              },
            },
          });
        }
      });
  }

  initSwiper();

  var elements = $(".context-navigation .swiper-wrapper .swiper-slide").size();

  $(".view-accessories a.btn").click(function (e) {
    e.preventDefault();
    var currentBtn = $(this);
    var slides = $(this).closest(".context-navigation").find(".swiper-wrapper .swiper-slide");
    if (elements > 3) {
      slides.show();
    }
    currentBtn.hide();
  });
};
