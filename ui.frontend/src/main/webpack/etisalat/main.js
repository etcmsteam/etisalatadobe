import "./js/forms";
import "./js/custom-components/*.js";
import "../global/js/components/**/*.js";

import { VIEW_MORE_TOGGLE } from "./js/overview-section";
import { GUIDE_TOUR_POPUP } from "./js/guide-tour";
import { ACCESSORIES_CARDS } from "./js/custom-components-es6/accessories-cards";
import { GLOBALFOOTPRINT } from "./js/custom-components-es6/globalfootprintcontainer";
import { ANAEMARATI_CARDS } from "./js/custom-components-es6/anaemarati-plans";

document.addEventListener("DOMContentLoaded", () => {
  VIEW_MORE_TOGGLE();
  GUIDE_TOUR_POPUP();
  ACCESSORIES_CARDS();
  GLOBALFOOTPRINT();
  ANAEMARATI_CARDS();
});

// Stylesheets
import "./main.scss";
