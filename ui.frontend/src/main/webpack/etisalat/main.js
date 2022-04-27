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
import { RELATED_JOBS } from "./js/custom-components/related-jobs";
import { SITE } from './js/custom-components/site';
import { BRAND_PORTFOLIO } from "./js/custom-components/brand-portfolio";
import { CURRENT_PROMOTION } from "./js/custom-components/current_promotion";
import { POP_UP_ACCESSIBILITY } from "./js/custom-components/pop-up-accessibility";
import { NV_CARD } from "./js/custom-components/nv-card-productlist";


document.addEventListener("DOMContentLoaded", () => {
  SITE();
  POP_UP_ACCESSIBILITY();
  VIEW_MORE_TOGGLE();
  GUIDE_TOUR_POPUP();
  GLOBALFOOTPRINT();
  TAB_SWIPER();
  YOU_TUBE_VIDEO_PLAYER();
  SHOP_BRANDS();
  PRODUCT_LIST();
  RELATED_JOBS();
  BRAND_PORTFOLIO();
  CURRENT_PROMOTION();
  NV_CARD();
  DYNAMIC_COMPONENTS.init();
});

// Stylesheets
import "./main.scss";
