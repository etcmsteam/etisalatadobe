  //shop swiper st 
  function initTileBoxesSlider() {
          // plans table slider for CMS modules start
          $(document).find('.tilecontainer .tile-boxes-section').each(function (index) {
            $(this).addClass('t-b-slider'+index);
            var $tileBoxesCarousal = new Swiper('.t-b-slider'+index+' .swiper-container', {
              //clickable: true,
              scrollbar: $(this).find('.scrollbar'),
              //nextButton: '.next.right'+index,
              //prevButton: '.prev.left'+index,
              scrollbarHide: false,
              scrollbarDraggable: true,
              
             // direction: 'rtl',
              breakpoints: {
                540: {
                    
                  spaceBetween: 16,
                  slidesPerView: 1.35
                },
                768: {
                    spaceBetween: 16,
                  slidesPerView: 2.35
                },
                1024: {
                    spaceBetween: 24,
                  slidesPerView: 4
                },
                1440: {
                  spaceBetween: 24,
                  slidesPerView: 4
                },
                9999: {
                    spaceBetween: 24,
                  centeredSlides: false,
                  slidesPerView: 4
                }
              }
            });
  
  
  
          });
          // plans table slider for CMS modules ends
          
           $(document).find('.tilecontainer .tileBoxMobCarWrap').each(function (itemindex) {

          var swiperSlideLength = $(this).find('.swiper-slide').length;
          $(this).addClass('swiper-with-' + swiperSlideLength + '-slides');
          if ($(window).width() > 991) {
            $(this).find('.tileboxCarousal').addClass('destroyed');
          } else {
            var $carouselSlider = new Swiper($(this).find('.tileboxCarousal'), {
              loop: false,
              autoplay: false,
              slidesPerView: 1,
              simulateTouch: true,
              pagination: '.swiper-pagination',
              touchEventsTarget: "swiper-wrapper",
              scrollbarDraggable: true,
              scrollbarHide: false,
              scrollbar: $(this).find('.table-swiper-scrollbar'),
              centeredSlides: true,
              spaceBetween: 20
            });
          }
        });
        
        }
  
        // register the event handlers
        $(document).ready(function() {
            initTileBoxesSlider();
            if ($(window).width() < 992)  {
            }
        });
 //shop swiper en

 //insurance swiper st
// External carousel for mobile only
    

 //insurance swiper en 