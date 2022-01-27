// Javascript or Typescript
import { Initializer } from "./initializer.js";


import "./js/core-components/*.js";
import "./js/custom-components/*.js";

// Stylesheets
import "./main.scss";


document.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line no-new
  new Initializer();
});
