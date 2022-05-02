/* eslint-disable */
export const MAIN_TEXT_ACITON = () => {
  // main text grid 4-0 load more
  $(document).on("click", ".main-text-grid-4-0 .main-text-action-wrapper .action a.btn", function (e) {
    e.preventDefault();
    $(this).closest(".main-text-grid-4-0").find(".grid-wrapper .grid-tile").css("display", "block");
    $(this).closest(".main-text-action-wrapper").css("display", "none");
  });

  // main text slider 4-0 load more
  $(document)
    .on("click", ".main-text-slider-4-0 .main-text-action-wrapper.load-more .action a.btn", function (e) {
      e.preventDefault();
      $(this).closest(".main-text-slider-4-0").find(".slides-wrapper .swiper-slide").css("display", "block");
      $(this).closest(".main-text-action-wrapper").css("display", "none");
  });
};