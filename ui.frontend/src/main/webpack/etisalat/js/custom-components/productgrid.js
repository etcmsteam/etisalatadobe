(function () {
  define(['swiper'], function () {
    function initSwiper() {
      // plans table slider for CMS modules start
      $(document).find('.product-grid-text-section.plans').each(function (index) {
        $(this).addClass('plansTable' + index);
        var $planTableParent = $(this);
        $planTableParent.find('.table-swiper-button-next').addClass('plansRight' + index);
        $planTableParent.find('.table-swiper-button-prev').addClass('plansLeft' + index);
        var $carouselSliderPlansGrid = new Swiper('.plansTable' + index + ' .swiper-container', {
          touchEventsTarget: "swiper-wrapper",
          simulateTouch: true,
          scrollbar: $(this).find('.table-swiper-scrollbar'),
          nextButton: '.table-swiper-button-next.plansRight' + index,
          prevButton: '.table-swiper-button-prev.plansLeft' + index,
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
              slidesPerView: 4
            }
          }
        });



      });
      // plans table slider for CMS modules ends
      if ($( ".smart-home-elife-slider" ).length) {
   $(document).find('.smart-home-elife-slider').each(function(index) {
	    $(this).addClass('slider' + index);
	    var $slider = $(this);
	    $slider.find('.table-swiper-button-next').addClass('plansRight' + index);
        $slider.find('.table-swiper-button-prev').addClass('plansLeft' + index);	
	    $carouselSliderSmartHome = new Swiper('.slider' + index + ' .swiper-container', {
	        scrollbar: $(this).find('.table-swiper-scrollbar'),
	        touchEventsTarget: "swiper-wrapper",
            simulateTouch: true,
	        nextButton: '.table-swiper-button-next.plansRight' + index,
            prevButton: '.table-swiper-button-prev.plansLeft' + index,
	        scrollbarHide: false,
	        scrollbarDraggable: true,
	        breakpoints: {
	            540: {	                
	                slidesPerView: 1
	            },
	            768: {	                
	                slidesPerView: 2
	            },
	            1024: {	                
	                slidesPerView: 2
	            },
	            1440: {	               
	                slidesPerView: 2
	            },
	            9999: {	                
	                centeredSlides: false,
	                slidesPerView: 2
	            }
	        }
	
	    });
	
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
        var $carouselSliderAddons = new Swiper('.addOnsTable' + index + ' .elife-addons .swiper-container', {
          loop: false,
          autoplay: false,
          touchEventsTarget: "swiper-wrapper",
          simulateTouch: true,
          scrollbar: $(this).find('.table-swiper-scrollbar'),
          nextButton: '.table-swiper-button-next.addOnsTableRight' + index,
          prevButton: '.table-swiper-button-prev.addOnsTableLeft' + index,
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
    });

  });





}(define, window));