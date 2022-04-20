import { swiperInit } from "../../../global/js/swiperInitialize";
/* eslint-disable */
import "./index.scss";
const TESTIMONIAL_MODULE = () => {
  $(".testimonial-module.testimonialSlider").each(function (index) {
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
};
export const NON_ACTIONABLE_MODULE = () => {
  // open youtube video and close by removing src and then add
  let NON_ACTION_BOX_VIDEO = $(".non-action-boxes-two-cols-4-0, .non-action-boxes-4-0");
  let NON_ACTION_BOX_READ_MORE = $(".non-action-boxes-4-0 .nab-content .paragraph-styling p");

  if (NON_ACTION_BOX_VIDEO.length > 0) {
    $(".youtube-video-link").on("click", function (e) {
      e.preventDefault();
      let MODAL_CTA = $(this).next(".mediaCtaVideo");
      MODAL_CTA.modal().show();

      if ($("body").hasClass("modal-open")) {
        $("body").parent().css("overflow", "hidden");
      }

      $("body").addClass("modal-overlay");
    });

    $(".youtube-popup-container").on("hidden.bs.modal", function () {
      let SRC = $(this).find("iframe").attr("src");

      $(this).find("iframe").attr("src", "");
      $(this).find("iframe").attr("src", SRC.replace("autoplay=1", ""));
      $("html").removeAttr("style");

      if ($("body").hasClass("modal-overlay")) {
        $("body").removeClass("modal-overlay");
      }
    });
  }

  if (NON_ACTION_BOX_READ_MORE.length > 0) {
    const LIMIT_TEXT = function (title, limit) {
      const NEW_TITLE = [];
      const REMAINING_TITLE = [];

      if (title.replace(/\s/g, "").length > limit) {
        title.split(" ").reduce(function (acc, curr) {
          if (acc + curr.length <= limit) {
            NEW_TITLE.push(curr);
          } else {
            REMAINING_TITLE.push(curr);
          }
          return acc + curr.length;
        }, 0);

        return [NEW_TITLE.join(" "), REMAINING_TITLE.join(" ")];
      }
      return title;
    };

    $(".nab-content .paragraph-styling p").each(function () {
      const CLICKABLE_AREA_CLS = ".clickable-area";

      if ($(this).hasClass("processed") === false) {
        let classBodyCopy = $("span:first", this).attr("class");
        let $ELE_TEXT = $(this).html().trim();
        let $TEXT_RESULT = LIMIT_TEXT($ELE_TEXT, 210);

        if ($ELE_TEXT.replace(/\s/g, "").length >= 210) {
          let $CUSTOM_SPAN = $("<span>");
          let $CUSTOM_DOTS = $("<span>");
          let PARAGRAPH_WITH_DOTS = $(this).html($TEXT_RESULT[0]);

          $CUSTOM_SPAN.addClass("custom-span");
          $CUSTOM_SPAN.addClass(classBodyCopy);
          $CUSTOM_SPAN.html(" " + $TEXT_RESULT[1]);
          $CUSTOM_DOTS.addClass("custom-dots");
          $CUSTOM_DOTS.addClass(classBodyCopy);
          $CUSTOM_DOTS.html(" ...");
          PARAGRAPH_WITH_DOTS.append($($CUSTOM_DOTS));
          PARAGRAPH_WITH_DOTS.append($($CUSTOM_SPAN));
          $CUSTOM_SPAN.css("display", "none");

          $(this).closest(CLICKABLE_AREA_CLS).addClass("pointer");
          CLICEABLE_AREA($(this).closest(CLICKABLE_AREA_CLS));
        } else {
          $(this).closest(CLICKABLE_AREA_CLS).find(".action").css("display", "none");
        }

        $(this).addClass("processed");
      }
    });

    function CLICEABLE_AREA(target) {
      $(target)
        .off("click")
        .on("click", function (e) {
          e.preventDefault();
          $(this).find(".paragraph-styling .custom-dots").toggle();
          $(this).find(".paragraph-styling .custom-span").toggle();
          $(this).find(".action").toggleClass("expanded");
        });
    }
  }
  TESTIMONIAL_MODULE();
};
