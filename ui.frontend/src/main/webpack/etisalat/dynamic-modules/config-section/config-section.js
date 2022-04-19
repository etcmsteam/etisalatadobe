import "./index.scss";

/* eslint-disable */
export const CONFIG_SECTION_WRAP = () => {
  var windowWidth = $(window).width();

  $(window).scroll(function () {
    if ($(".config-section-wrap").hasClass("affix")) {
      $("body").addClass("fixed-config-section");
    } else {
      $("body").removeClass("fixed-config-section");
    }
    var fixedWrapper = $("#fixed-wrapper").attr("data-behaviour");
    if (windowWidth < 991 && fixedWrapper) {
      $("#fixed-wrapper").addClass(fixedWrapper);
      $(".config-section-wrap").addClass("m-top-24");
      if ($(this).scrollTop() == 0) {
        $("#fixed-wrapper").removeClass(fixedWrapper);
        $(".config-section-wrap").removeClass("m-top-24");
      }
    }
  });

  if (!$(".config-section-wrap .page-nav li.active").length) {
    return false;
  }
  if (windowWidth < 991) {
    $(".config-section-wrap .page-nav li a").on("click", function () {
      $(".config-section-wrap .page-nav li").removeClass("active");
      $(this).parent().addClass("active");
      var scrollToCurrent =
        $(".config-section-wrap .page-nav li.active").offset().left +
        $(".config-section-wrap .page-nav li.active").outerWidth(true) / 2 +
        $(".simplebar-content").scrollLeft() -
        $(".simplebar-content").width() / 2;
      $(".simplebar-content").scrollLeft(scrollToCurrent);
    });
  }

  var scrollToCurrent =
    $(".config-section-wrap .page-nav li.active").offset().left +
    $(".config-section-wrap .page-nav li.active").outerWidth(true) / 2 +
    $(".simplebar-content").scrollLeft() -
    $(".simplebar-content").width() / 2;
  $(".simplebar-content").scrollLeft(scrollToCurrent);
};
