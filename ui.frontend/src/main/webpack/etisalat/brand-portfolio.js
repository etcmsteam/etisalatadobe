$(document).find('.brand-portfolio').each(function (index) {
    var swiper = new Swiper('.slider-outlet-brands', {
      loop: false,
      autoplay: false,
      touchEventsTarget: "swiper-wrapper",
      simulateTouch: true,
      scrollbar: $(this).find('.table-swiper-scrollbar'),
      scrollbarHide: false,
      scrollbarDraggable: true,
      spaceBetween: 24,
      breakpoints: {

        320: {
          spaceBetween: 16,
          slidesPerView: 1.64
        },
        475: {
          spaceBetween: 16,
          slidesPerView: 1.64
        },
        767: {
          spaceBetween: 16,
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 3
        },
        1224: {
          slidesPerView: 4
        },
        1440: {
          slidesPerView: 6
        },
        9999: {
          slidesPerView: 6
        }
      }
    });


  
   
    });


    
