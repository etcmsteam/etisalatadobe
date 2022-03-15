/* eslint-disable no-undef */
// language dropdown
export const LANGUAGE_JS = () => {
  $(".language a").click((event) => {
    $(".language a").toggleClass("open");
    event.stopPropagation();
    $(".language-menu").toggle();
  });
  $(document).click(() => {
    $(".language-menu").hide();
  });
};
