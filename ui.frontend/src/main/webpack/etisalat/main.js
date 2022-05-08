import "./js/analytics/analytics-events.js";
import { VIEW_MORE_TOGGLE } from "./js/custom-components/overview-section";
import { GLOBALFOOTPRINT } from "./js/custom-components/globalfootprintcontainer";
import { TAB_SWIPER } from "./js/custom-components/tab-swiper";
import { YOU_TUBE_VIDEO_PLAYER } from "./js/custom-components/youtube-video";
import { SHOP_BRANDS } from "./js/custom-components/shop-brands";
import { PRODUCT_LIST } from "./js/custom-components/productList";
import DYNAMIC_COMPONENTS from "./dynamic-components.js";
import { SITE } from "./js/custom-components/site";
import { BRAND_PORTFOLIO } from "./js/custom-components/brand-portfolio";
import { CURRENT_PROMOTION } from "./js/custom-components/current_promotion";
import { POP_UP_ACCESSIBILITY } from "./js/custom-components/pop-up-accessibility";
import { NV_CARD } from "./js/custom-components/nv-card-productlist";
import { OFFER_SLIDER } from "./js/custom-components/offer-slider";
import { SHARE_FEEDBACK } from "./js/custom-components/share-feedback";
import { CONTEXT_NAV } from "./js/custom-components/05-context-nav";
import { BACK_TO_TOP } from "./js/custom-components/backtotop";
import { PAGE_NAV_CONFIG } from "./js/custom-components/config.js";
import { CUSTOMER_TABLE } from "./js/custom-components/cust_table.js";
import { MAIN_TEXT_ACITON } from "./js/custom-components/main-text.js";
import { SCROLLSPY_AFFIX_MODULE } from "./js/custom-components/scrollspy-affix.js";
import { SMS_BLOG_SHARE_LINK_MODULE } from "./js/custom-components/smb-blog-share-link.js";
import { IMAGE_WITH_NEW_SVG_MODULE } from "./js/custom-components/svg.js";
import { TECH_SUPPORT_MODULE } from "./js/custom-components/tech-support.js";
import { TILES_SWIPER_MODULE } from "./js/custom-components/tiles_swiper.js";
import { LOGIN_INIT } from "./js/custom-components/login";

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
    LOGIN_INIT,
  ].forEach(ERROR_BOUNDARY);

  DYNAMIC_COMPONENTS.init();
});

// Stylesheets
import "./main.scss";
