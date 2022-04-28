import "./js/forms";
import "./js/custom-components/*.js";
import "./js/analytics/analytics-events.js";

import { VIEW_MORE_TOGGLE } from "./js/overview-section";
import { GUIDE_TOUR_POPUP } from "./js/guide-tour";
import { GLOBALFOOTPRINT } from "./js/custom-components-es6/globalfootprintcontainer";
import { TAB_SWIPER } from "./js/custom-components-es6/tab-swiper";
import { YOU_TUBE_VIDEO_PLAYER } from "./js/custom-components/youtube-video";
import { SHOP_BRANDS } from "./js/custom-components/shop-brands";
import { PRODUCT_LIST } from "./js/custom-components/productList";
import DYNAMIC_COMPONENTS from "./dynamic-components.js";
import { SITE } from "./js/custom-components/site";
import { BRAND_PORTFOLIO } from "./js/custom-components/brand-portfolio";
import { CURRENT_PROMOTION } from "./js/custom-components/current_promotion";
import { POP_UP_ACCESSIBILITY } from "./js/custom-components/pop-up-accessibility";
import { TABLE } from "./js/custom-components/table";

const ERROR_BOUNDARY = (fun) => {
  try {
    fun();
  } catch (err) {
    console.error(err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  ERROR_BOUNDARY(DYNAMIC_COMPONENTS.init);
  ERROR_BOUNDARY(SITE);
  ERROR_BOUNDARY(POP_UP_ACCESSIBILITY);
  ERROR_BOUNDARY(VIEW_MORE_TOGGLE);
  ERROR_BOUNDARY(GUIDE_TOUR_POPUP);
  ERROR_BOUNDARY(GLOBALFOOTPRINT);
  ERROR_BOUNDARY(TAB_SWIPER);
  ERROR_BOUNDARY(YOU_TUBE_VIDEO_PLAYER);
  ERROR_BOUNDARY(SHOP_BRANDS);
  ERROR_BOUNDARY(PRODUCT_LIST);
  ERROR_BOUNDARY(BRAND_PORTFOLIO);
  ERROR_BOUNDARY(CURRENT_PROMOTION);
  ERROR_BOUNDARY(TABLE);
});

// Stylesheets
import "./main.scss";
