import { swiperInit } from "../../../global/js/swiperInitialize";

(function () {
    //function to pass swiper options collectively
    var $carouselSliderPlansGrid;
    const swiperOptions = (elem, next, prev, brPoint1, brPoint2, brPoint3, brPoint4, brPoint5) => {
      return {
        touchEventsTarget: "swiper-wrapper",
        simulateTouch: true,
        scrollbar: elem.find('.table-swiper-scrollbar'),
        nextButton: next,
        prevButton: prev,
        scrollbarHide: false,
        scrollbarDraggable: true,
        breakpoints: {
          540: {
            slidesPerView: brPoint1
          },
          768: {
            slidesPerView: brPoint2
          },
          1200: {
            slidesPerView: brPoint3
          },
          1439: {
            slidesPerView: brPoint4
          },
          9999: {
            centeredSlides: false,
            slidesPerView: brPoint5
          }
        }
      };
    };

    function initSwiper() {
      // plans table slider for CMS modules start
      $(document).find('.product-grid-text-section.plans').each(function (index) {
        $(this).addClass('plansTable' + index);
        var $planTableParent = $(this);
        $planTableParent.find('.table-swiper-button-next').addClass('plansRight' + index);
        $planTableParent.find('.table-swiper-button-prev').addClass('plansLeft' + index);

        $carouselSliderPlansGrid = swiperInit('.plansTable' + index + ' .swiper-container', swiperOptions($planTableParent, '.table-swiper-button-next.plansRight' + index, '.table-swiper-button-prev.plansLeft' + index, 1.25, 2, 3, 3, 4));
      });
      // plans table slider for CMS modules ends
      if ($( ".smart-home-elife-slider" ).length) {
   $(document).find('.smart-home-elife-slider').each(function(index) {
	    $(this).addClass('slider' + index);
	    var $slider = $(this);
	    $slider.find('.table-swiper-button-next').addClass('plansRightElife' + index);
        $slider.find('.table-swiper-button-prev').addClass('plansLeftElife' + index);
      
      var $carouselSliderSmartHome = swiperInit('.slider' + index + ' .swiper-container', swiperOptions($slider, '.table-swiper-button-next.plansRightElife' + index, '.table-swiper-button-prev.plansLeftElife' + index, 1, 2, 2, 2, 2));

	    // hide the arrow if slides count is 2 or less
	    var slidesCount = $slider.find('.swiper-slide').length;
	    if (slidesCount < 3) {
	        $slider.find('.table-swiper-button-next').addClass('hidden');
	        $slider.find('.table-swiper-button-prev').addClass('hidden');
	    }
	});
}



      $(document).find('.product-grid-text-section.addons').each(function (index) {
        $(this).addClass('addOnsTable' + index);
        var $planTableParent = $(this);
        $planTableParent.find('.table-swiper-button-next').addClass('addOnsTableRight' + index);
        $planTableParent.find('.table-swiper-button-prev').addClass('addOnsTableLeft' + index);

        var $carouselSliderAddons = swiperInit('.addOnsTable' + index + ' .elife-addons .swiper-container', swiperOptions($planTableParent, '.table-swiper-button-next.addOnsTableRight' + index, '.table-swiper-button-prev.addOnsTableLeft' + index, 1.25, 2, 3, 4, 4));

      });

      $(document)
      .find(".product-grid-container.elife-addon-slider")
      .each(function (index) {
        $(this).addClass("addOnsTable" + index);
        var $planTableParent = $(this);
        $planTableParent.find(".table-swiper-button-next").addClass("swipebtn addOnsTableRight" + index);
        $planTableParent.find(".table-swiper-button-prev").addClass("swipebtn addOnsTableLeft" + index);

        var $carouselSliderAddons = swiperInit(
          ".addOnsTable" + index + " .elife-addons .swiper-container",
          swiperOptions(
            $planTableParent,
            ".table-swiper-button-next.addOnsTableRight" + index,
            ".table-swiper-button-prev.addOnsTableLeft" + index,
            1.25,
            2,
            3,
            4,
            4,
          ),
        );
      });
    }

    function setSpacebetweenTableCarousel() {
      var $carousel = $(".plans-table .swiper-container");
      var spaceBetween = 0;

      $(document)
        .find(".plans-table .swiper-container")
        .each(function () {
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
          var $carouselSlider = swiperInit($(this).find('.mobCarousel'), {
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
    //Common functionality for load more
    function loadMoreBtn(defaultDataCount) {
      $(document).find('[id^=product] .swiper-slide').each(function (i) {
        if (i >= defaultDataCount) {
          $(this).addClass('hide');
        }
      });

      $('.loadmore-btn .btn').on('click', function (e) {
        $('[id^=product]').find('.swiper-slide').removeClass('hide');
        $('.loadmore-btn').addClass('hide');
        //$(document).scrollTop($(document).height());
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if (rippler.find('.ink').length === 0) {
          rippler.append('<span class="ink"></span>');
        }

        var ink = rippler.find('.ink');

        // prevent quick double clicks
        ink.removeClass('animate');

        // set .ink diametr
        if (!ink.height() && !ink.width()) {
          var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
          ink.css({ height: d, width: d });
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width() / 2;
        var y = e.pageY - rippler.offset().top - ink.height() / 2;

        // set .ink position and add class .animate
        ink.css({
          top: y + 'px',
          left: x + 'px'
        }).addClass('animate');
    
        e.preventDefault();
      });
    }
    $(document).ready(function () {

      initSwiper();
      initMobileCarousel();
      $('.main-loader').hide();

      var isLoadExist = $('.loadmore-btn').length == 1 ? true : false;
      var defaultDataCount = $(".loadmore-btn").attr("data-defaultcount") != '' ? $(".loadmore-btn").attr("data-defaultcount") : 6;

      if ($(document).find('[id^=product] .swiper-slide').length < 4) {
        $(".swiper-button-black").addClass('hide');
      }
      if (isLoadExist) {
        loadMoreBtn(defaultDataCount);
      }

      $('.collapse-tab[data-target="#collapseNumTwo"]').click(function () {
        setTimeout(function () {
          initSwiper();
          //$('.main-loader').hide();
          setSpacebetweenTableCarousel();
        }, 500);
      });


      //Product cards with filter
      var radios = [];
      var selected = [];

      $(".category-list-wrap input").each(function () {
        radios.push($(this));
      });

      for (var i = 0; i < radios.length; i++) {
        $(radios[i]).each(function (index) {
          var self = $(this);
          if ($(this).prop("checked")) {
            selected.push($(this));

            // passing data-label and id to function for filtering
            filterCards($(this).attr("data-label"), $(this));
          }
        });
      }

      // on radio selction show hide right panel ( container )
      $(".category-list-wrap input").change(function () {
        if ($(this).is(":checked")) {
          filterCards($(this).attr("data-label"), $(this));
        }
      });

      function filterCards(radioInput, selfFilter) {
        var filter = $(selfFilter).closest(".category-list-wrap");
        $(filter).find("ul li").removeClass("active");
        $(filter)
          .find("[data-label='" + radioInput + "']")
          .closest("li")
          .addClass("active");
        $(".common > div").css("display", "none");

        if (radioInput === "all-categories") {
          $(".common > div").css("display", "block");
        } else {
          $("[data-label='" + radioInput + "']").css("display", "block");
        }
      }

      // filter mobile view popup open close
      function filtersMobileView(thisValue) {
        if (window.innerWidth < 992) {
          var currentElement = $(thisValue).attr("data-label");
          if (currentElement) {
            $(".responsive-" + currentElement).addClass("mobileViewActive");
            $("body").addClass("freeze");
          }
        }
      }
      $(".filter-compare-sort-section a")
        .off("click")
        .on("click", function () {
          filtersMobileView(this);
        });

      // to make filters popup in-active ( hide )in mobile view
      $(".filter-close")
        .off("click")
        .on("click", function () {
          $(".responsive-filters").removeClass("mobileViewActive");
          $(".responsive-sort").removeClass("mobileViewActive");
          $("body").removeClass("freeze");
        });

      // get the ID from URL
      var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split("&"),
          sParameterName,
          i;
        for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split("=");

          if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
        }
        return false;
      };
      // load the right container based on id from URL
      var idToPass = getUrlParameter("selectedFilterID");
      if (idToPass !== "" && idToPass !== undefined && idToPass !== false) {
        if (idToPass.includes("?")) {
          $("[data-label='" + idToPass.slice(0, 1) + "']").click();
        } else {
          $("[data-label='" + idToPass + "']").click();
        }
      } else {
        $("[data-label='all-categories']").click();
      }
    });

  //});





}(define, window));