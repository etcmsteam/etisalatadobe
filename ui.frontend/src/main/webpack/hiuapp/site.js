$(() => {
  $(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    if (windowTop > 48) {
      $(".scrollUp").css("display", "block");
      $("html").css("scroll-behavior", "smooth");
    } else {
      $(".scrollUp").css("display", "none");
      $("html").css("scroll-behavior", "smooth");
    }
  });
});

$(document).ready(function () {
  $(".menu__icon").on("click", function (e) {
    e.preventDefault();
    $(".menu").toggleClass("ShowMenu");
  });

  $(".menu li a").on("click", function () {
    $(".menu").removeClass("ShowMenu");
  });
})

$(".copyright-year .cmp-text").text(new Date().getFullYear());

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
    $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - 150,
    },
    300
  );
});
