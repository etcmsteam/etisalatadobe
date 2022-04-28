import "./js/forms";
import "./js/custom-components/*.js";
import "./js/analytics/analytics-events.js";


import { VIEW_MORE_TOGGLE } from "./js/overview-section";
import { GLOBALFOOTPRINT } from "./js/custom-components-es6/globalfootprintcontainer";
import { TAB_SWIPER } from "./js/custom-components-es6/tab-swiper";
import { YOU_TUBE_VIDEO_PLAYER } from "./js/custom-components/youtube-video";
import { SHOP_BRANDS } from "./js/custom-components/shop-brands";
import { PRODUCT_LIST } from "./js/custom-components/productList";
import { SITE } from './js/custom-components/site';
import { BRAND_PORTFOLIO } from "./js/custom-components/brand-portfolio";
import { CURRENT_PROMOTION } from "./js/custom-components/current_promotion";
import { POP_UP_ACCESSIBILITY } from "./js/custom-components/pop-up-accessibility";
import { TABLE } from "./js/custom-components/table";
import DYNAMIC_COMPONENTS from "./dynamic-components.js";

document.addEventListener("DOMContentLoaded", () => {
  SITE();
  POP_UP_ACCESSIBILITY();
  TABLE();
  VIEW_MORE_TOGGLE();
  GLOBALFOOTPRINT();
  TAB_SWIPER();
  YOU_TUBE_VIDEO_PLAYER();
  SHOP_BRANDS();
  PRODUCT_LIST();
  BRAND_PORTFOLIO();
  CURRENT_PROMOTION();
  DYNAMIC_COMPONENTS.init();
});

// Stylesheets
import "./main.scss";
