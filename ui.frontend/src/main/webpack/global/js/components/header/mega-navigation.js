/* eslint-disable func-names */
/* eslint-disable no-undef */
$(function () {

  $(".mega-dropdown-mob a").click(function () {
    $(this).closest("ul").children(".mega-dropdown-mob-menu").slideToggle("100");
    $(this).parent().toggleClass("open");
  });

  // top push navigation
  $(".inc-push-meu-icon a").click(function (e) {
    e.preventDefault();

    $(".push-nav-container").toggleClass("open");
      $("body").toggleClass("push-menu-open");
      if ($("body").hasClass("push-menu-open")) {
        $(".en-logo-text").addClass("in-left");
        setTimeout(function () {
          $(".push-close").removeClass("d-none");
        }, 100);
      } else {
        $(".en-logo-text").removeClass("in-left");
        $(".push-close").addClass("d-none");
      }
  });
});
