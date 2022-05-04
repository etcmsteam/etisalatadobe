import { swiperInit } from "../../../global/js/swiperInitialize";
import { IsMediaQuery } from "../../../global/js/helpers";
/* eslint-disable */
export const CURRENT_PROMOTION = () => {
  function initSwiper() {
    // plans table slider for CMS modules start
    $(document)
      .find(".current-promotions-wrraper")
      .each(function (index) {
        $(this).addClass("c-p-slider" + index);
        const $slider = $(this);
        $slider.find(".next").addClass("right" + index);
        $slider.find(".prev").addClass("left" + index);
        const $carouselSliderCurrentPromotions = swiperInit(".c-p-slider" + index + " .swiper-container", {
          //clickable: true,
          scrollbar: $(this).find(".scrollbar"),
          nextButton: ".next.right" + index,
          prevButton: ".prev.left" + index,
          scrollbarHide: false,
          scrollbarDraggable: true,
          loop: $slider.parents(".swiper-loop").length,
          breakpoints: {
            540: {
              spaceBetween: 16,
              slidesPerView: $slider.parent().hasClass("top-carousel") ? 1 : 1.68,
              //loop: false,
            },
            768: {
              spaceBetween: $slider.parent().hasClass("top-carousel") ? 0 : 16,
              slidesPerView: $slider.parent().hasClass("top-carousel") ? 2 : 2.5,
              //loop: false,
            },
            1024: {
              spaceBetween: 24,
              slidesPerView: 3,
            },
            1440: {
              spaceBetween: $slider.parent().hasClass("top-carousel") ? 16 : 24,
              slidesPerView: 3,
            },
            9999: {
              spaceBetween: $slider.parent().hasClass("top-carousel") ? 16 : 24,
              centeredSlides: false,
              slidesPerView: 3,
            },
          },
        });
        // Below check is to destroy slider if parent have slider-destroy class name
        if (!IsMediaQuery.sm.matches && $slider.parents("div").hasClass("slider-destroy")) {
          $(`.slider-destroy .${$carouselSliderCurrentPromotions.classNames[0]}`)[0].swiper.destroy(false, true);
        }
        //End
      });

    //swiper with single tile
    $(document)
      .find(".product-grid-single .product-promotions-wrraper")
      .each(function (index) {
        $(this).addClass("c-p-slider" + index);
        const $slider = $(this);
        $slider.find(".next").addClass("right" + index);
        $slider.find(".prev").addClass("left" + index);
        swiperInit(".c-p-slider" + index + " .swiper-container", {
          //clickable: true,
          nextButton: ".next.right" + index,
          prevButton: ".prev.left" + index,
          scrollbarHide: false,
          scrollbarDraggable: true,
          observer: true,
          observeParents: true,
          breakpoints: {
            540: {
              slidesPerView: 1.25,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
            1440: {
              slidesPerView: 1,
            },
            9999: {
              centeredSlides: false,
              slidesPerView: 1,
            },
          },
        });
      });

    // plans table slider for CMS modules ends
  }
  initSwiper();
  window.addEventListener("resize", initSwiper);
  $(".btn-modal").on("click", function (event) {
    const dataLabel = $(this).attr("data-label");
    if (dataLabel) {
      const $el = $("#" + dataLabel).clone();
      $(".modal-popup-wrapper").append($el);
      $(".modal-popup-wrapper #" + dataLabel).addClass("show");
      $(".modal-popup-wrapper #" + dataLabel).removeClass("fade");
      $(".modal-popup-wrapper .modal-popup").addClass("show");
      $("body, html").addClass("freeze");
      $(".modal-popup-wrapper").show;
      $(".modal-popup-wrapper").css("display", "block");
    }
  });

  // close popup
  function closePopUp(e) {
    e.stopPropagation();
    e.preventDefault();
    const currentOpendPopUp = $(this).closest(".modal-popup-wrapper");
    $(currentOpendPopUp).removeClass("show");
    $(currentOpendPopUp).css("display", "none");
    $(currentOpendPopUp).children().remove();
    $("body, html").removeClass("freeze");
  };
  $(".modal-popup-wrapper").off("click").on("click", ".nv-modal-close", closePopUp);

  //For Load More button click
  function handleLoadMore() {
    const SLIDE_WRAP = $(this).parents(".slider-load-more");
    SLIDE_WRAP.addClass("slider-load-more--active");
    $(this).hide();
  }
  $(".slider-load-more-cta").on("click", handleLoadMore);
}
