// Stylesheets
import "./corecomponents.scss";

// Accordion JS
import { ACCORDION_JS } from "./js/core-components/accordion";
// Language JS
import { LANGUAGE_JS } from "./js/core-components/language";
// Tabs JS
import { TABS_JS } from "./js/core-components/tabs";
// Carousel Swiper
import { CAROUSEL_SWIPER } from "./js/core-components/carousel-swiper";

document.addEventListener("DOMContentLoaded", () => {
  ACCORDION_JS();
  LANGUAGE_JS();
  TABS_JS();
  CAROUSEL_SWIPER();
});
