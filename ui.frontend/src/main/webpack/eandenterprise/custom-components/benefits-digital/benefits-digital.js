/* eslint-disable */
import $ from 'jquery';
import Swiper from 'swiper';

export const BENEFITS_DIGITAL = () => {
  $(document)
    .find('.benefits-wrapper')
    .each(function () {
      var $planTableParent = $(this);
      new Swiper($planTableParent.find('.swiper-container'), {
        nextButton: $(this).find('.swiper-button-next'),
        prevButton: $(this).find('.swiper-button-prev'),
        pagination: $(this).find('.swiper-pagination'),
        loop: false,
        autoplay: false,
        slidesPerView: 1,
        centeredSlides: true,
        simulateTouch: true,
        touchEventsTarget: 'swiper-wrapper',
        paginationClickable: $(this).find('.swiper-pagination'),
        paginationType: 'fraction',
      });
    });
};
