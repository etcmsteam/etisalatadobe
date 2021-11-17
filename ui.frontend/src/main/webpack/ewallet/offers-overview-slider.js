var swiper = new Swiper(".swiper-container-horizontal", {
  slidesPerView: 3,
  spaceBetween: 25,
  noSwiping: true,
  noSwipingClass: "no-swap-desktop-new",
  breakpoints: {
    767: {
      slidesPerView: 3,
      spaceBetween: 20,
      noSwiping: false,
    },
    736: {
      slidesPerView: "auto",
      spaceBetween: 20,
      noSwiping: false,
    },
  },
});
