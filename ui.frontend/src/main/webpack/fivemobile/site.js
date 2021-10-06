$(document).ready(function () {
  $(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    if (windowTop > 100) {
      $("#main-header").addClass("Scroll-Up");
      $("#main-header").removeClass("Scroll-Down");
    } else {
      $("#main-header").addClass("Scroll-Down");
      $("#main-header").removeClass("Scroll-Up");
      $("nav ul").css("overflow", "visible");
    }
  });

  $(".menu__icon").on("click", function (e) {
    e.preventDefault();
    $(".menu").toggleClass("ShowMenu");
  });

  $(".menu li a").on("click", function (e) {
    e.preventDefault();
    $(".menu").removeClass("ShowMenu");
  });
});
