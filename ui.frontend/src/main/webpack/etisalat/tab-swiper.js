$(document).ready(function () {
  var initSwiper;
  initSwiper = function () {
 
    //edc-tabs-wrapper
    $(document).find('.cmp_tabs__horizontal_with_years .edc-tabs-wrapper').each(function (index) {
        $(this).addClass('edc-swiper-tabs'+index);
        var $swiperTabsParent = $(this);
        $swiperTabsParent.find('.swiper-button-next').addClass('r'+index);
        $swiperTabsParent.find('.swiper-button-prev').addClass('l'+index);
        var edcSwiperWithArrows = new Swiper('.edc-swiper-tabs'+index+' .swiper-container', {
        
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

       

      });



     

  }
  
  // register the event handlers
    initSwiper();
  
});