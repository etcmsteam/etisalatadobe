// Javascript or Typescript
import { Initializer } from "./initializer.js";

import "./**/*.js";
import "./js/forms";
import "./js/accordion/*.js";
import "./js/clientcode/*.js";
import "./js/language/*.js";
import "./js/site/*.js";

// Stylesheets
import "./main.scss";


document.addEventListener("DOMContentLoaded", () => {
  new Initializer();
});
