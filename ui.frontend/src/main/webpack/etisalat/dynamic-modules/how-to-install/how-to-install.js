/* eslint-disable */
export const HOW_TO_INSTALL = () => {
  $(".how-to-install-steps-mobile").each(function (index) {
    $(this).addClass("hti" + index);
    new Swiper(".hti" + index + " .swiper-container", {
      direction: "horizontal",
      followFinger: false,
      pagination: ".swiper-pagination",
      paginationType: "bullets",
      paginationClickable: true,
      loop: true,
      slidesPerView: 1,
    });
  });
};
