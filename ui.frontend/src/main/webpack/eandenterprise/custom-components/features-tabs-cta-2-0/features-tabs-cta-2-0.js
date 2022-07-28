/* eslint-disable */
import $ from 'jquery';

export const FEATURE_IN_TAB_CTA_2_0 = () => {
  $('.features-tabs-cta-2-0 .nav-wrap  a.tab-head').on('click', function (e) {
    if (window.innerWidth > 991) {
      var currentAttrValue = $(this).attr('href');
      $(this).removeClass('collapsed');
      $(this).siblings().addClass('collapsed');
      $(this).closest('.features-tabs-cta-2-0').find('.mobile-head .collapse').removeClass('in animate-content');
      $(this).closest('.features-tabs-cta-2-0').find('.mobile-head').find(currentAttrValue).addClass('in');
      var ele = $(this);
      setTimeout(function () {
        $(ele).closest('.features-tabs-cta-2-0').find('.mobile-head').find(currentAttrValue).addClass('animate-content');
      }, 100);
      var divRef = $(this).parents('.features-tabs-cta-2-0').find('.mobile-head').find(currentAttrValue);
      if (divRef.hasClass('in')) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
  });
};

