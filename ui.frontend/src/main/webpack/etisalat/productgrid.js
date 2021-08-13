/**
 * v###version###
 */
 (function(define, window) {
    define(["swiper"], function($) {
      "use strict";
  
      return function() {
  
        function initSwiper() {
          // plans table slider for CMS modules start
          $(document).find('.product-grid-text-section.plans').each(function (index) {
            $(this).addClass('plansTable'+index);
            var $planTableParent = $(this);
            $planTableParent.find('.table-swiper-button-next').addClass('plansRight'+index);
            $planTableParent.find('.table-swiper-button-prev').addClass('plansLeft'+index);
            var $carouselSliderPlansGrid = new Swiper('.plansTable'+index+' .swiper-container', {
              //clickable: true,
              scrollbar: $(this).find('.table-swiper-scrollbar'),
              nextButton: '.table-swiper-button-next.plansRight'+index,
              prevButton: '.table-swiper-button-prev.plansLeft'+index,
              scrollbarHide: false,
              scrollbarDraggable: true,
              breakpoints: {
                540: {
                  slidesPerView: 1.25
                },
                768: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                },
                1440: {
                  slidesPerView: 3
                },
                9999: {
                  centeredSlides: false,
                  slidesPerView: 3
                }
              }
            });
  
  
  
          });
          // plans table slider for CMS modules ends
  
  
  
          $(document).find('.product-grid-text-section.addons').each(function (index) {
            $(this).addClass('addOnsTable'+index);
            var $planTableParent = $(this);
            $planTableParent.find('.table-swiper-button-next').addClass('addOnsTableRight'+index);
            $planTableParent.find('.table-swiper-button-prev').addClass('addOnsTableLeft'+index);
            var $carouselSliderAddons = new Swiper('.addOnsTable'+index+' .elife-addons .swiper-container', {
              loop: false,
              autoplay: false,
              touchEventsTarget: "swiper-wrapper",
              simulateTouch: true,
              scrollbar: $(this).find('.table-swiper-scrollbar'),
              nextButton: '.table-swiper-button-next.addOnsTableRight'+index,
              prevButton: '.table-swiper-button-prev.addOnsTableLeft'+index,
              scrollbarHide: false,
              scrollbarDraggable: true,
              breakpoints: {
                540: {
                  slidesPerView: 1.25
                },
                768: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                },
                1440: {
                  slidesPerView: 4
                },
                9999: {
                  centeredSlides: false,
                  slidesPerView: 4
                }
              }
            });
  
          });
  
  
  
  
          // var plansTableSliders = [];
          // var $carousel = $(".related-products .swiper-container");
          // var $carouselSliderTable = new Swiper(".related-products .swiper-container", {
          //   loop: false,
          //   autoplay: false,
          //   touchEventsTarget: "swiper-wrapper",
          //   slidesPerView: 4,
          //   simulateTouch: true,
          //   scrollbar: ".table-swiper-scrollbar",
          //   scrollbarHide: false,
          //   scrollbarDraggable: false,
          //   nextButton: ".related-products .table-swiper-button-next",
          //   prevButton: ".related-products .table-swiper-button-prev",
          //   breakpoints: {
          //
          //     540: {
          //       slidesPerView: 1.25
          //     },
          //     768: {
          //       slidesPerView: 2
          //     },
          //     1024: {
          //       slidesPerView: 3
          //     },
          //     1440: {
          //       slidesPerView: 3
          //     },
          //     9999: {
          //       centeredSlides: false,
          //       slidesPerView: 3
          //     }
          //   }
          // });
  
          // $carousel.each(function(index, element) {
          //   $(this).addClass("s" + index);
          //   var $planTableParent2 = $(this).parent();
          //   $planTableParent2
          //     .find(".table-swiper-button-next")
          //     .addClass("r" + index);
          //   $planTableParent2
          //     .find(".table-swiper-button-prev")
          //     .addClass("l" + index);
          //   var $carouselSliderTable = new Swiper(".s" + index, {
          //     loop: false,
          //     autoplay: false,
          //     touchEventsTarget: "swiper-wrapper",
          //     slidesPerView: 4,
          //     simulateTouch: true,
          //     scrollbar: ".table-swiper-scrollbar",
          //     scrollbarHide: false,
          //     scrollbarDraggable: true,
          //     nextButton: ".table-swiper-button-next.r" + index,
          //     prevButton: ".table-swiper-button-prev.l" + index,
          //     breakpoints: {
          //       1024: {
          //         slidesPerView: 4
          //       },
          //       768: {
          //         slidesPerView: 3
          //       },
          //       640: {
          //         slidesPerView: 2
          //       },
          //       320: {
          //         slidesPerView: 1
          //       },
          //       9999: {
          //         centeredSlides: false,
          //         slidesPerView: 4
          //       }
          //     }
          //   });
          // });
        }
  
        function setSpacebetweenTableCarousel() {
          var $carousel = $(".plans-table .swiper-container");
          var spaceBetween = 0;
  
          $(document)
            .find(".plans-table .swiper-container")
            .each(function() {
              var slideTemp = $(this)[0].swiper;
              if (slideTemp) {
                spaceBetween =
                  ($(this).width() - ($(this).width() / 10) * 3 * 3) / 2;
                slideTemp.params.spaceBetween = spaceBetween;
                $(this)
                  .find(".swiper-wrapper")
                  .removeAttr("style");
                $(this)
                  .find(".swiper-slide")
                  .removeAttr("style");
                slideTemp.update(true);
              }
            });
        }
  
  
        // External carousel for mobile only
        function initMobileCarousel() {
          $(document).find('.mobCarouselWrapper').each(function (itemindex) {
  
            var swiperSlideLength = $(this).find('.swiper-slide').length;
            $(this).addClass('swiper-with-' + swiperSlideLength + '-slides');
            if ($(window).width() > 767) {
              $(this).find('.mobCarousel').addClass('destroyed');
            } else {
              var $carouselSlider = new Swiper($(this).find('.mobCarousel'), {
                slidesPerView: 1,
                spaceBetween: 20,
                simulateTouch: true,
                pagination: '.swiper-pagination',
                touchEventsTarget: "swiper-wrapper",
                scrollbarDraggable: true,
                scrollbarHide: false,
                scrollbar: ".table-swiper-scrollbar"
              });
            }
          });
        }
  
        // register the event handlers
        $(document).ready(function() {
          initSwiper();
          initMobileCarousel();
  
          $('.collapse-tab[data-target="#collapseNumTwo"]').click(function() {
            setTimeout(function() {
              initSwiper();
              setSpacebetweenTableCarousel();
            }, 500);
          });
        });
  
  
      };
    });
  })(define, window);
  
  