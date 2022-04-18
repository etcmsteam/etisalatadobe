/* eslint-disable no-undef */
$(document).ready(function () {
  $(".mega-dropdown-mob a").click(function () {
    $(this).closest("ul").children(".mega-dropdown-mob-menu").slideToggle("100");
    $(this).parent().toggleClass("open");
  });
});
