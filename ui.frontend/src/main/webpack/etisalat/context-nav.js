$(document).ready(function () {
  function setSpacebetweenContextNavCarousel() {
    var spaceBetween = 0;
    $(document).find('.context-nav-box-wrap').each(function () {
      var slideTemp = $(this)[0].swiper;
      if (slideTemp) {
        spaceBetween = ($(this).width() - ($(this).width() / 10 * 3 * 3)) / 2;
        slideTemp.params.spaceBetween = spaceBetween;
        $(this).find('.swiper-wrapper').removeAttr('style');
        $(this).find('.swiper-slide').removeAttr('style');
        slideTemp.update(true);
      }
    });

  }

  function initContextNavCarousel() {
    $(document).find('.row-context-nav').each(function () {
      var swiperSlideLength = $(this).find('.swiper-slide').length;
      $(this).addClass('swiper-with-' + swiperSlideLength + '-slides');
      var $carouselSlider = new Swiper($(this).find('.context-nav-box-wrap'), {
        loop: false,
        autoplay: false,
        slidesPerView: $(this).find('.swiper-slide').length,
        simulateTouch: true,
        breakpoints: {
          767: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetweenSlides: 0
          },
          9999: {
            centeredSlides: false,
            slidesPerView: $(this).find('.swiper-slide').length
          }
        }
      });

      setSpacebetweenContextNavCarousel();
    });
  }

  // register the event handlers
  $(document).ready(function () {
    initContextNavCarousel();
    if ($('.context-nav-box-wrap').length) {
      $(window).on('resize', function () {

        setTimeout(function () {
          setSpacebetweenContextNavCarousel();
        }, 500);

      });
    }

  });
});
