$(".menu__icon").on("click", function (e) {
  e.preventDefault();
  $(".menu__icon").toggleClass("CloseBtn");
  $(".main-nav__list").addClass("ShowMenu");
  $(".main-nav__list.ShowMenu").slideToggle("slow");
});

$(".menu li a").on("click", function () {
  $(".ShowMenu").slideToggle("slow");
  $(".main-nav__list").removeClass("ShowMenu");
});

