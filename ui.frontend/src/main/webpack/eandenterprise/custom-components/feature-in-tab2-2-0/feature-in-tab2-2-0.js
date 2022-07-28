/* eslint-disable */
import $ from 'jquery';

export const FEATURE_IN_TAB2_2_0 = () => {
  $('.feature-in-tab2-2-0 .tab-head-wrapper .nav-tabs li>a').on('click', function () {
    var imgActive = $(this).attr('aria-controls');
    $('.feature-in-tab2-2-0 .tab-content .tab-pane#' + imgActive)
      .siblings()
      .removeClass('animate-content');
    setTimeout(function () {
      $('.feature-in-tab2-2-0 .tab-content .tab-pane#' + imgActive).addClass('animate-content');
    }, 100);
  });
};
