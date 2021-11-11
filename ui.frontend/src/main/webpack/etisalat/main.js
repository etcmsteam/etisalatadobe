// Javascript or Typescript
import { Initializer } from "./initializer.js";
import intlTelInput from "intl-tel-input";

import "./**/*.js";
import "./site.js";
// Stylesheets
import "./main.scss";


document.addEventListener("DOMContentLoaded", () => {
  new Initializer();
});
