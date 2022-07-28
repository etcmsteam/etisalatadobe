/* eslint-disable */
import $ from 'jquery';
import Swiper from 'swiper';

export const CARDS_CAROUSEL_DIGITAL = () => {
    $(document)
      .find('.cards-carousel-cta-wrap')
      .each(function (index) {
        var $cardsCarouselParent = $(this);
        var $carouselSliderPlansGrid = new Swiper($cardsCarouselParent.find('.swiper-container'), {
          nextButton: $cardsCarouselParent.find('.swiper-button-next'),
          prevButton: $cardsCarouselParent.find('.swiper-button-prev'),
          pagination: $cardsCarouselParent.find('.swiper-pagination'),
          loop: false,
          autoplay: false,
          slidesPerView: 2.6,
          centeredSlides: true,
          slidesOffsetBefore: -260,
          simulateTouch: true,
          touchEventsTarget: 'swiper-wrapper',
          spaceBetween: 24,
          paginationClickable: $cardsCarouselParent.find('.swiper-pagination'),
          paginationType: 'fraction',
          breakpoints: {
            2000: {
              slidesOffsetBefore: -330,
            },
            1884: {
              slidesOffsetBefore: -299,
            },
            1600: {
              slidesOffsetBefore: -260,
            },
            1465: {
              slidesOffsetBefore: -235,
            },
            1350: {
              slidesOffsetBefore: -220,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 16,
              centeredSlides: true,
              slidesOffsetBefore: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 16,
              centeredSlides: true,
              slidesOffsetBefore: 0,
            },
          },
        });
      });
};
