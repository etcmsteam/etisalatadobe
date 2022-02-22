import { swiperInit } from "../../../global/js/swiperInitialize";
import { IsMediaQuery } from "../../../global/js/helpers";

//function to pass swiper options collectively
const swiperOptions = (elem, next, prev, loopVal, dragVal, slideView1, slideView2, slideView3, slideView4, slideView5) => {
  return {
    scrollbar: elem.find(".scrollbar"),
    touchEventsTarget: "swiper-wrapper",
    autoplay: false,
    loop: loopVal,
    scrollbarDraggable: dragVal,
    simulateTouch: true,
    scrollbarHide: false,
    nextButton: next,
    prevButton: prev,
    breakpoints: {
      540: {
        spaceBetween: slideView1,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: slideView2,
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: slideView3,
        slidesPerView: 2,
      },
      1440: {
        spaceBetween: slideView4,
        slidesPerView: 3,
      },
      9999: {
        spaceBetween: slideView5,
        slidesPerView: 3,
      },
    },
  };
};

function initContextSwiper() {
  $(document)
    .find(".tilecontainer  .context-navigation-4-0.swiper")
    .each(function (index) {
      $(this).addClass("c-n-slider" + index);
      var $slider = $(this);
      $slider.find(".next").addClass("right-slider" + index);
      $slider.find(".prev").addClass("left-slider" + index);
      var $contextNavigationWithSlider = swiperInit(
        ".c-n-slider" + index + " .swiper-container",
        swiperOptions($slider, ".next.right-slider" + index, ".prev.left-slider" + index, false, true, 96, 96, 24, 24, 24),
      );
    });
}

function initContextSwiperWithLoop() {
  $(document)
    .find(".tilecontainer .context-navigation-4-0.with-loop")
    .each(function (index) {
      $(this).addClass("c-n-slider-loop" + index);
      var $sliderLoop = $(this);
      $sliderLoop.find(".next").addClass("right-loop" + index);
      $sliderLoop.find(".prev").addClass("left-loop" + index);
      var $contextNavigationWithLoop = swiperInit(
        ".c-n-slider-loop" + index + " .swiper-container",
        swiperOptions($sliderLoop, ".next.right-loop" + index, ".prev.left-loop" + index, true, false, 96, 24, 24, 24, 24),
      );
    });
}

function initContextSwiperWithHideArrows() {
  $(document)
    .find(".tilecontainer .context-navigation-4-0.with-hide-arrows")
    .each(function (index) {
      $(this).addClass("c-n-slider-hide-arrows" + index);
      var $slider = $(this);
      $slider.find(".next").addClass("right-arrow" + index);
      $slider.find(".prev").addClass("left-arrow" + index);
      var $contextNavigationWithHideArrows = swiperInit(
        ".c-n-slider-hide-arrows" + index + " .swiper-container",
        swiperOptions($slider, ".next.right-arrow" + index, ".prev.left-arrow" + index, false, false, 0, 0, 0, 0, 0),
      );
    });
}

// register the event handlers
$(document).ready(function () {
  if (IsMediaQuery.sm.matches) {
    initContextSwiperWithLoop();
    initContextSwiperWithHideArrows();
  }

  if (IsMediaQuery.md.matches) {
    initContextSwiper();
  }

  $(".context-navigation-4-0").each(function () {
    var len = $(this).find(".all-tiles .context-tile ").length;
    if (len > 3) {
      $(this).find(".load-more").show();
    } else {
      $(this).find(".load-more").hide();
    }
  });

  $(".context-navigation-4-0 .load-more a.btn").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".context-navigation-4-0").find(".all-tiles .context-tile").css("display", "flex");
    $(this).closest(".load-more").css("display", "none");
  });
});
