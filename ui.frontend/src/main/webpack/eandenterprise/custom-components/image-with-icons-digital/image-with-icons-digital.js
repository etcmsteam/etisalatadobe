import $ from 'jquery';

export const IMAGE_WITH_ICONS_DIGITAL = () => {
  if (!$('.image-with-icons-2-0').length) {
    return;
  }
  function containerMargin() {
    var offset = $('.image-with-icons-2-0 .container').offset().left;
    var isArabic = $('body').attr('dir');
    if (window.innerWidth > 991) {
      $('.image-with-icons-2-0 .bg').offset({
        left: isArabic === 'rtl' ? '-' + (offset + 202) : offset + 202,
      });
    } else {
      $('.image-with-icons-2-0 .bg').offset({ left: 0 });
    }
  }

  $(window).on('resize', containerMargin);

  containerMargin();

  $('.image-with-icons-2-0 .tab-head-wrapper .nav-tabs li>a').on('click', function () {
    var imgActive = $(this).attr('aria-controls');
    $('.image-with-icons-2-0 .left-img-blk[data-img-tab=' + imgActive + ']')
      .addClass('img-active')
      .siblings()
      .removeClass('img-active animate');

    $('.image-with-icons-2-0 .tab-content .tab-pane#' + imgActive)
      .siblings()
      .removeClass('animate-content');

    setTimeout(function () {
      $('.image-with-icons-2-0 .left-img-blk[data-img-tab=' + imgActive + ']').addClass('animate');
      $('.image-with-icons-2-0 .tab-content .tab-pane#' + imgActive).addClass('animate-content');
    }, 100);
  });

  $('.image-with-icons-2-0 .tab-content .tab-mobile-head').on('click', function () {
    $(this).toggleClass('active');
    $(this).parent('.tab-pane').siblings().find('.tab-mobile-head').removeClass('active');
  });
};
