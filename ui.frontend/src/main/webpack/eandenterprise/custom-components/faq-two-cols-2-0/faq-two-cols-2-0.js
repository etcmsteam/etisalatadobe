/* eslint-disable */
export const FAQ_TWO_COLS_ACCORDION = () => {
  $('.faq-two-cols-2-0').each(function (ele, index) {
    var col = $(index).find('.faq-wrapper').attr('data-left-col');
    $(index)
      .find('.faq-wrapper .panel-group .panel:lt(' + col + ')')
      .wrapAll("<div class='panel-wrap'/>");
    $(index).find('.panel-group > .panel').wrapAll("<div class='panel-wrap'/>");
  });

  // var col = $(".faq-two-cols-2-0 > .faq-wrapper").attr("data-left-col");
  // $(
  //   ".faq-two-cols-2-0 > .faq-wrapper .panel-group .panel:lt(" + col + ")"
  // ).wrapAll("<div class='panel-wrap'/>");
  // $(".faq-wrapper .panel-group > .panel").wrapAll(
  //   "<div class='panel-wrap'/>"
  // );
  $('.faq-two-cols-2-0 .faq-wrapper .panel>.panel-heading .panel-title>a').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.panel').siblings().find('.panel-collapse').removeClass('in').attr('aria-expanded', false);
    $(this).parents('.panel').siblings().find('a').addClass('collapsed').attr('aria-expanded', false);
    $(this).parents('.panel-wrap').siblings().find('.panel-collapse').removeClass('in').attr('aria-expanded', false);
    $(this).parents('.panel-wrap').siblings().find('a').addClass('collapsed').attr('aria-expanded', false);
  });
};
