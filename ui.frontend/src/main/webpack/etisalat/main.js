import "./js/forms";
import "./js/custom-components/*.js";
import "./js/analytics/analytics-events.js";

import { VIEW_MORE_TOGGLE } from "./js/overview-section";
import { GUIDE_TOUR_POPUP } from "./js/guide-tour";
import { GLOBALFOOTPRINT } from "./js/custom-components-es6/globalfootprintcontainer";
import { TAB_SWIPER } from "./js/custom-components-es6/tab-swiper";
import { YOU_TUBE_VIDEO_PLAYER } from "./js/custom-components/youtube-video";
import DYNAMIC_COMPONENTS from "./dynamic-components.js";

document.addEventListener("DOMContentLoaded", () => {
  VIEW_MORE_TOGGLE();
  GUIDE_TOUR_POPUP();
  GLOBALFOOTPRINT();
  TAB_SWIPER();
  YOU_TUBE_VIDEO_PLAYER();
  DYNAMIC_COMPONENTS.init();
});

// Stylesheets
import "./main.scss";
