/* eslint-disable no-undef */
/* eslint-disable consistent-return */
export const VIEW_MORE_TOGGLE = () => {
    const VIEW_MORE_CTA = $(".product-features .view-more");
    const PRODUCT_FEATURE = $(".product-features");

    if (!VIEW_MORE_CTA.length) {
      return false;
    }

    VIEW_MORE_CTA.on("click", (event) => {
      event.preventDefault();
      VIEW_MORE_CTA.toggleClass("active");
      PRODUCT_FEATURE.toggleClass("show-more");
    });
};
