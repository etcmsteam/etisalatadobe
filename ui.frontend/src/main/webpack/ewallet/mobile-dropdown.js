$(".menu__icon").on("click", function (e) {
  e.preventDefault();
  $(".menu__icon").toggleClass("CloseBtn");
  $(".MenuWrapper").slideToggle("slow");
});

$(".menu li a").on("click", function () {
  $(".MenuWrapper").slideToggle("slow");
});