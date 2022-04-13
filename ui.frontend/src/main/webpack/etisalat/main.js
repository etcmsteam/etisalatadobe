import "./js/forms";
import "./js/custom-components/*.js";
import "./js/analytics/analytics-events.js";

import { VIEW_MORE_TOGGLE } from "./js/overview-section";
import { GUIDE_TOUR_POPUP } from "./js/guide-tour";
import { ACCESSORIES_CARDS } from "./js/custom-components-es6/accessories-cards";
import { GLOBALFOOTPRINT } from "./js/custom-components-es6/globalfootprintcontainer";
import { ANAEMARATI_CARDS } from "./js/custom-components-es6/anaemarati-plans";
import { TAB_SWIPER } from "./js/custom-components-es6/tab-swiper";
import { STORE_LOCATOR } from "./js/custom-components-es6/store-locator";
import { FEATURES_DOWNLOAD_ICONS } from "./js/custom-components-es6/features-4.0";

document.addEventListener("DOMContentLoaded", () => {
  VIEW_MORE_TOGGLE();
  GUIDE_TOUR_POPUP();
  ACCESSORIES_CARDS();
  GLOBALFOOTPRINT();
  ANAEMARATI_CARDS();
  TAB_SWIPER();
  STORE_LOCATOR();
  FEATURES_DOWNLOAD_ICONS();
});

// Stylesheets
import "./main.scss";
