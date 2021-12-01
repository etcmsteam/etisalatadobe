// Javascript or Typescript
import { Initializer } from "./initializer.js";


import "./**/*.js";
import "./js/forms";
import "./js/core-components/*.js";
import "./js/custom-components/*.js";
// import "./js/core-components/site/*.js";
// import "./js/core-components/svg/*.js";
//import "./js/language/*.js";


// Stylesheets
import "./main.scss";


document.addEventListener("DOMContentLoaded", () => {
  new Initializer();
});
