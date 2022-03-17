// Javascript or Typescript
import "./js/core-components/*.js";

// Stylesheets
import "./corecomponents.scss";

// Accordion JS
import { ACCORDION_JS } from "./js/core-components/accordion";

// Language JS
import { LANGUAGE_JS } from "./js/core-components/language";

// Tabs JS
import { TABS_JS } from "./js/core-components/tabs";

document.addEventListener("DOMContentLoaded", () => {
  ACCORDION_JS();
  LANGUAGE_JS();
  TABS_JS();
});
