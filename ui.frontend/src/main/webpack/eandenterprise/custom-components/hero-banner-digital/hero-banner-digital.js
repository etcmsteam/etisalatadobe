import $ from 'jquery';

export const HERO_BANNER_DIGITAL = () => {
  $(document)
  .find('.main-hero-banner-carousel-2-0')
  .each(function (index) {
    $(this).addClass('plansTableMainBanner' + index);
    var $planTableParent = $(this);
    $planTableParent.find('.swiper-button-next').addClass('plansRight' + index);
    $planTableParent.find('.swiper-button-prev').addClass('plansLeft' + index);
    $planTableParent.find('.swiper-pagination').addClass('newpage' + index);
    var $carouselSliderPlansGrid = new Swiper('.plansTableMainBanner' + index + ' .swiper-container', {
      nextButton: $(this).find('.swiper-button-next.plansRight' + index),
      prevButton: $(this).find('.swiper-button-prev.plansLeft' + index),
      pagination: $(this).find('.swiper-pagination.newpage' + index),
      loop: false,
      autoplay: false,
      slidesPerView: 1,
      centeredSlides: true,
      simulateTouch: true,
      effect: 'fade',
      touchEventsTarget: 'swiper-wrapper',
      paginationClickable: $(this).find('.swiper-pagination.newpage' + index),
      paginationType: 'fraction',
    });
  });
};
