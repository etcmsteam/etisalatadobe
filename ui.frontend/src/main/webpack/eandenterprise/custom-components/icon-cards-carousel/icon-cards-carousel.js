import $ from 'jquery';

export const ICON_CARDS_CAROUSEL = () => {
  $(document)
    .find('.icon-cards-carousel')
    .each(function (index) {
      const iconCardsCarouselParent = $(this);
      const nextButton = iconCardsCarouselParent.find('.swiper-button-next');
      const prevButton = iconCardsCarouselParent.find('.swiper-button-prev');
      const pagination = iconCardsCarouselParent.find('.swiper-pagination');

      var $carouselSliderPlansGrid = new Swiper(iconCardsCarouselParent.find('.swiper-container'), {
        nextButton,
        prevButton,
        pagination,
        loop: false,
        slidesPerView: 3,
        slidesOffsetBefore: -410,
        centeredSlides: true,
        touchEventsTarget: 'swiper-wrapper',
        spaceBetween: 0,
        paginationClickable: pagination,
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
        var itemsCount = $(this).find('.swiper-wrapper .swiper-slide').length;
        if (itemsCount == 3) {
          $(this).find('.swiper-btn-wrapper').addClass('disabled-swiper');
        }
    });
};
