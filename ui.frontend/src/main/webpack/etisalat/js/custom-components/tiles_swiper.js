/* eslint-disable */
import { swiperInit } from "../../../global/js/swiperInitialize";
  
function initTileBoxesSlider() {
  // plans table slider for CMS modules start
  $(document)
    .find(".tilecontainer .tile-boxes-section")
    .each(function (index) {
      $(this).addClass("t-b-slider" + index);
      const $tileBoxesCarousal = swiperInit(".t-b-slider" + index + " .swiper-container", {
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

  $(document)
    .find(".tilecontainer .tileBoxMobCarWrap")
    .each(function (itemindex) {
      const swiperSlideLength = $(this).find(".swiper-slide").length;
      $(this).addClass("swiper-with-" + swiperSlideLength + "-slides");
      if ($(window).width() > 991) {
        $(this).find(".tileboxCarousal").addClass("destroyed");
      } else {
        const $carouselSlider = swiperInit($(this).find(".tileboxCarousal"), {
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
}

export const TILES_SWIPER_MODULE = () => {
  initTileBoxesSlider();
  if ($(window).width() < 992) {
  }

  // open youtube video and close by removing src and then add tile box Grid
  $(document).on("click", ".tileBoxVideoLink", function (e) {
    e.preventDefault();
    var modalCTA = $(this).next(".tileBoxVideoModal");
    $(this).closest(".swiper-wrapper").addClass("remove-transform remove-zIndex");
    $(this).closest(".swiper-container").addClass("remove-zIndex");
    if ($(this).closest(".tile-boxes-section").hasClass("four-plus-slides")) {
      $(this).closest(".tile-boxes-section").addClass("remove-sticky-pos");
    }
    modalCTA.modal().show();
    if ($("body").hasClass("modal-open")) {
      $("body").parent().css("overflow", "hidden");
    }
    $("body").addClass("modal-overlay");
  });

  $(document).on("hidden.bs.modal", ".tileBoxVideoModal", function () {
    var src = $(this).find("iframe").attr("src");
    $(this).find("iframe").attr("src", "");
    $(this).find("iframe").attr("src", src.replace("autoplay=1", ""));
    $("html").removeAttr("style");
    if ($("body").hasClass("modal-overlay")) {
      $("body").removeClass("modal-overlay");
    }
    $(this).closest(".swiper-wrapper").removeClass("remove-transform remove-zIndex");
    $(this).closest(".swiper-container").removeClass("remove-zIndex");
    if ($(this).closest(".tile-boxes-section").hasClass("remove-sticky-pos")) {
      $(this).closest(".tile-boxes-section").removeClass("remove-sticky-pos");
    }
  });

  //open youtube video and close by removing src and then add three tile box
};
