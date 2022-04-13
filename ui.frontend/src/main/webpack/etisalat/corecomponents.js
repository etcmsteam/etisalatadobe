
import "./corecomponents.scss";
import { ACCORDION_JS } from "./js/core-components/accordion";
import { LANGUAGE_JS } from "./js/core-components/language";
import { TABS_JS } from "./js/core-components/tabs";
import { CAROUSEL_SWIPER } from "./js/core-components/carousel-swiper";

document.addEventListener("DOMContentLoaded", () => {
  ACCORDION_JS();
  LANGUAGE_JS();
  TABS_JS();
  CAROUSEL_SWIPER();
});
