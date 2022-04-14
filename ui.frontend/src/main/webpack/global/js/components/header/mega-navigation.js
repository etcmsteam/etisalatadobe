/* eslint-disable */
$(document).ready(function () {
  $(".mega-dropdown-mob a").click(function (e) {
    $(this).closest("ul").children(".mega-dropdown-mob-menu").slideToggle("100");
    return;
  });
});