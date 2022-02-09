// Javascript or Typescript
import { Initializer } from "../global/initializer.js";


import "./js/core-components/*.js";


// Stylesheets
import "./corecomponents.scss";


document.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line no-new
  new Initializer();
});
