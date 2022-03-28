import { swiperInit } from "../../../global/js/swiperInitialize";
/* eslint-disable */

export const TAB_SWIPER = () => {
  var initSwiper;
  initSwiper = function () {
    //edc-tabs-wrapper
    $(document)
      .find(".cmp_tabs-swipper")
      .each(function (index) {
        $(this).addClass("edc-swiper-tabs" + index);
        var $swiperTabsParent = $(this);
        const istabs = $swiperTabsParent.parents().hasClass("cmp_tabs--horizontal-title");
        const isWSTChanneltabs = $swiperTabsParent.parents().hasClass("cmp-tab-wst-channellist");
        const isChanneltabs = $swiperTabsParent.parents().hasClass("cmp-tab-channellist");
        const isConfigtabs = $swiperTabsParent.parents().hasClass("cmp_tabs--horizontal");

        $swiperTabsParent.find(".swiper-button-next").addClass("r" + index);
        $swiperTabsParent.find(".swiper-button-prev").addClass("l" + index);
        var edcSwiperWithArrows = swiperInit(".edc-swiper-tabs" + index + " .swiper-container", {
          preventClicks: false,
          slideToClickedSlide: true,
          nextButton: ".swiper-button-next.r" + index,
          prevButton: ".swiper-button-prev.l" + index,
          breakpoints: {
            540: {
              slidesPerView: istabs ? "auto" : isWSTChanneltabs ? "auto" : isConfigtabs ? "auto" : isChanneltabs ? "auto" : 3,
            },
            768: {
              slidesPerView: istabs ? "auto" : isWSTChanneltabs ? "auto" : isConfigtabs ? "auto" : isChanneltabs ? "auto" : 4,
            },
            1024: {
              slidesPerView: istabs ? "auto" : isWSTChanneltabs ? "auto" : isConfigtabs ? "auto" : isChanneltabs ? "auto" : 4,
            },
            1440: {
              slidesPerView: "auto",
            },
            9999: {
              slidesPerView: "auto",
            },
          },
        });
      });
  };

  // register the event handlers
  initSwiper();
};
