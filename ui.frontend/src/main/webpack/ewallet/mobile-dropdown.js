$(".menu__icon").on("click", function (e) {
  e.preventDefault();
  $(".menu__icon").toggleClass("CloseBtn");
  $(".MenuWrapper").toggleClass("ShowMenu");
  $(".MenuWrapper").slideToggle("slow");
});

$(".menu li a").on("click", function () {
  $(".MenuWrapper.ShowMenu").slideToggle("slow");
});