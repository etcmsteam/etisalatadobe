import $ from 'jquery';

export const TOP_NAV_DIGITAL = () => {

  $('.inc-push-meu-icon a').click(function () {
    $('.push-nav-container').toggleClass('open');

    $('body').toggleClass('push-menu-open');

    if ($('body').hasClass('push-menu-open')) {
      $('.en-logo-text').addClass('in-left');
      setTimeout(function () {
        $('.push-close').removeClass('d-none');
      }, 100);
    } else {
      $('.en-logo-text').removeClass('in-left');
      $('.push-close').addClass('d-none');
    }
  });

};
