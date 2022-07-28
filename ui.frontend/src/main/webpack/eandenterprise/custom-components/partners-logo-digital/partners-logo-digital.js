/* eslint-disable */
import $ from 'jquery';
import Swiper from 'swiper';

export const PARTNERS_LOGO_DIGITAL = () => {
  $(document)
    .find('.partners-logos')
    .each(function (index) {
      $(this).addClass('partnersTable' + index);
      var $parternsLogoParent = $(this);
      var $carouselSliderPlansGrid = new Swiper($parternsLogoParent.find('.swiper-container'), {
        nextButton: $parternsLogoParent.find('.swiper-button-next'),
        prevButton: $parternsLogoParent.find('.swiper-button-prev'),
        pagination: $parternsLogoParent.find('.swiper-pagination'),
        loop: false,
        autoplay: false,
        slidesPerView: 3,
        simulateTouch: true,
        watchOverflow: true,
        slidesOffsetBefore: -410,
        centeredSlides: true,
        touchEventsTarget: 'swiper-wrapper',
        spaceBetween: 0,
        paginationClickable: $parternsLogoParent.find('.swiper-pagination'),
        paginationType: 'fraction',
        breakpoints: {
          1249: {
            slidesOffsetBefore: -320,
          },
          1023: {
            slidesPerView: 2,
            slidesOffsetBefore: -250,
          },
          991: {
            slidesPerView: 1,
            slidesOffsetBefore: 0,
          },
        },
      });
      //hides navigation and pagination if slides below 3
      $('.partners-logos').each(function () {
        var itemsCount = $parternsLogoParent.find('.swiper-wrapper .swiper-slide').length;
        if (itemsCount == 3) {
          $parternsLogoParent.find('.swiper-btn-wrapper').addClass('disabled-swiper');
        }
      });
    });
};
