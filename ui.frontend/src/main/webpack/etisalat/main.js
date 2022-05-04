import "./js/analytics/analytics-events.js";


import { VIEW_MORE_TOGGLE } from "./js/overview-section";
import { GLOBALFOOTPRINT } from "./js/custom-components-es6/globalfootprintcontainer";
import { TAB_SWIPER } from "./js/custom-components-es6/tab-swiper";
import { YOU_TUBE_VIDEO_PLAYER } from "./js/custom-components-es6/youtube-video";
import { SHOP_BRANDS } from "./js/custom-components-es6/shop-brands";
import { PRODUCT_LIST } from "./js/custom-components-es6/productList";
import DYNAMIC_COMPONENTS from "./dynamic-components.js";
import { SITE } from "./js/custom-components-es6/site";
import { BRAND_PORTFOLIO } from "./js/custom-components-es6/brand-portfolio";
import { CURRENT_PROMOTION } from "./js/custom-components-es6/current_promotion";
import { POP_UP_ACCESSIBILITY } from "./js/custom-components-es6/pop-up-accessibility";
import { NV_CARD } from "./js/custom-components-es6/nv-card-productlist";
import { TABLE } from "./js/custom-components-es6/table";
import { OFFER_SLIDER } from "./js/custom-components-es6/offer-slider";
import { SHARE_FEEDBACK } from "./js/custom-components-es6/share-feedback";
import { CONTEXT_NAV } from "./js/custom-components-es6/05-context-nav";
import { BACK_TO_TOP } from "./js/custom-components-es6/backtotop";
import { PAGE_NAV_CONFIG } from "./js/custom-components-es6/config.js";
import { CUSTOMER_TABLE } from "./js/custom-components-es6/cust_table.js";
import { MAIN_TEXT_ACITON } from "./js/custom-components-es6/main-text.js";
import { SCROLLSPY_AFFIX_MODULE } from "./js/custom-components-es6/scrollspy-affix.js";
import { SMS_BLOG_SHARE_LINK_MODULE } from "./js/custom-components-es6/smb-blog-share-link.js";
import { IMAGE_WITH_NEW_SVG_MODULE } from "./js/custom-components-es6/svg.js";
import { TECH_SUPPORT_MODULE } from "./js/custom-components-es6/tech-support.js";
import { TILES_SWIPER_MODULE } from "./js/custom-components-es6/tiles_swiper.js";

const ERROR_BOUNDARY = (fun) => {
  try {
    fun();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Module Script Error: ", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  [
    SITE,
    POP_UP_ACCESSIBILITY,
    TABLE,
    VIEW_MORE_TOGGLE,
    GLOBALFOOTPRINT,
    TAB_SWIPER,
    YOU_TUBE_VIDEO_PLAYER,
    SHOP_BRANDS,
    PRODUCT_LIST,
    BRAND_PORTFOLIO,
    CURRENT_PROMOTION,
    NV_CARD,
    OFFER_SLIDER,
    SHARE_FEEDBACK,
    CONTEXT_NAV,
    BACK_TO_TOP,
    PAGE_NAV_CONFIG,
    CUSTOMER_TABLE,
    MAIN_TEXT_ACITON,
    SCROLLSPY_AFFIX_MODULE,
    SMS_BLOG_SHARE_LINK_MODULE,
    TECH_SUPPORT_MODULE,
    TILES_SWIPER_MODULE,
    IMAGE_WITH_NEW_SVG_MODULE,
  ].forEach(ERROR_BOUNDARY);

  DYNAMIC_COMPONENTS.init();
});

// Stylesheets
import "./main.scss";

