import $ from 'jquery';

export const TESTIMONIAL_QUOTE_DIGITAL = () => {
  $(document)
    .find('.testimonial-quote-wrapper')
    .each(function (index) {
      var $planTableParent = $(this);
      var $carouselSliderPlansGrid = new Swiper($planTableParent.find('.swiper-container'), {
        nextButton: $(this).find('.swiper-button-next'),
        prevButton: $(this).find('.swiper-button-prev'),
        pagination: $(this).find('.swiper-pagination'),
        loop: false,
        autoplay: false,
        slidesPerView: 1,
        centeredSlides: true,
        simulateTouch: true,
        effect: 'fade',
        touchEventsTarget: 'swiper-wrapper',
        paginationClickable: $(this).find('.swiper-pagination'),
        paginationType: 'fraction',
      });
    });
};
