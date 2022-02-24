import { swiperInit } from "../../../global/js/swiperInitialize";
import { IsMediaQuery } from "../../../global/js/helpers";

$(document).ready(function () {
  if (IsMediaQuery.md.matches) {
    var $carouselSlider = swiperInit($(".offers-expanded-view.with-slider").find(".swiper-container"), {
      loop: false,
      autoplay: false,
      touchEventsTarget: "swiper-wrapper",
      pagination: ".swiper-pagination",
      nextButton: ".button-next",
      prevButton: ".button-prev",
      scrollbarHide: false,
      simulateTouch: true,
      scrollbarDraggable: true,
      scrollbar: ".table-swiper-scrollbar",
      breakpoints: {
        540: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 3,
        },
        9999: {
          slidesPerView: 3,
        },
      },
    });
  }

  $(".offers-expanded-view").on("shown.bs.collapse", function () {
    var body = document.body,
      html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    var ele = $(this);
    $(ele).css("height", height);
  });

  $(".with-slider").on("shown.bs.collapse", function () {
    if (IsMediaQuery.md.matches) {
      $carouselSlider.update();
    }
  });

  $(document).mouseup(function (e) {
    var container = $(".offers-expanded-view .cross-promo-background");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.promotional-banner-wrapper.expand-collapse .main[aria-expanded="true"]').trigger("click");
    }
  });
});
