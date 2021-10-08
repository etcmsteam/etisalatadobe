
    // plans table slider for CMS modules start
    $(document).find('.cmp-tabs__tabpanel.cmp-tabs__tabpanel--active').each(function (index) {
      
        $(this).addClass('slider-outlet-brands'+index);
        console.log("alert");
        alert("hi");
        var $planTableParent = $(this);
        $planTableParent.find('.table-swiper-button-next').addClass('plansRight'+index);
        $planTableParent.find('.table-swiper-button-prev').addClass('plansLeft'+index);
        var $carouselSliderPlansGrid = new Swiper('.slider-outlet-brands'+index+' .swiper-container', {
          loop: false,
          autoplay: false,
          touchEventsTarget: "swiper-wrapper",
          simulateTouch: true,
          
          nextButton: '.table-swiper-button-next.plansRight'+index,
          prevButton: '.table-swiper-button-prev.plansLeft'+index,
          breakpoints: {
            540: {
              slidesPerView: 1.25
            },
            768: {
              slidesPerView: 1
            },
            1024: {
              slidesPerView: 1
            },
            1440: {
              slidesPerView: 1
            },
            9999: {
              centeredSlides: false,
              slidesPerView: 1
            }
          }
        });
  
  
  
      });
  
      var plansTableSliders = [];
      var $carousel = $(".slider-outlet-brands .swiper-container");
  
      $carousel.each(function(index, element) {
        $(this).addClass("s" + index);
        var $planTableParent = $(this)
          .parent()
          .parent();
        $planTableParent
          .find(".table-swiper-button-next")
          .addClass("r" + index);
        $planTableParent
          .find(".table-swiper-button-prev")
          .addClass("l" + index);
        var $carouselSliderTable = new Swiper(".s" + index, {
          loop: false,
          autoplay: false,
          touchEventsTarget: "swiper-wrapper",
          slidesPerView: 3,
          simulateTouch: false,
          scrollbar: ".table-swiper-scrollbar",
          scrollbarHide: false,
          scrollbarDraggable: true,
          nextButton: ".table-swiper-button-next.r" + index,
          prevButton: ".table-swiper-button-prev.l" + index,
          breakpoints: {
            767: {
              slidesPerView: "auto",
              spaceBetweenSlides: 0,
              centeredSlides: true
            },
            1024: {
              enteredSlides: false,
              slidesPerView: 2
            },
            1440: {
              centeredSlides: false,
              slidesPerView: 3
            },
            9999: {
              centeredSlides: false,
              slidesPerView: 4
            }
          }
        });
      });
  
      //edc-tabs-wrapper
      $(document).find('.edc-tabs-wrapper').each(function (index) {
          $(this).addClass('s'+index);
          var $swiperTabsParent = $(this);
          $swiperTabsParent.find('.swiper-button-next').addClass('r'+index);
          $swiperTabsParent.find('.swiper-button-prev').addClass('l'+index);
          var edcSwiperWithArrows = new Swiper('.s'+index+' .edc-swiper-with-arrows', {
            slidesPerView: 'auto',
            preventClicks: false,
            slideToClickedSlide: true,
            nextButton: '.swiper-button-next.r'+index,
            prevButton: '.swiper-button-prev.l'+index,
            breakpoints: {
              540: {
                slidesPerView: 3
              },
              768: {
                slidesPerView: 4
              },
              1024: {
                slidesPerView: 4
              },
              1440: {
                slidesPerView: 'auto'
              },
              9999: {
                slidesPerView: 'auto'
              }
            }
          });
  
          // simple swiper tabs
          var edcSwiperTabs = new Swiper('.edc-swiper-tabs', {
            slidesPerView: 'auto',
            preventClicks: false,
            slideToClickedSlide: true,
          });
  
        });
  
    