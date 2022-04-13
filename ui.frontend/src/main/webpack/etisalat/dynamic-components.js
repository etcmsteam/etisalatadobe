import "regenerator-runtime/runtime";

// register the className of each dynamic component to it's own js chunk, and initialization call
const DYNAMIC_MODULE = {
  "cmp-herobanner": async () => {
    await import(/* webpackChunkName: 'hero-banner' */ "./dynamic-modules/hero-banner/hero-banner-4-0").then((obj) => obj.HERO_BANNER());
  },
  "cmp-accessoriescardcontainer": async () => {
    await import(/* webpackChunkName: 'accessories-card' */ "./dynamic-modules/accessories-cards/accessories-cards").then((obj) => obj.ACCESSORIES_CARDS());
  },
  "cmp-green-friday": async () => {
    await import(/* webpackChunkName: 'green-friday' */ "./dynamic-modules/green-friday/green-friday").then((obj) => obj.GREEN_FRIDAY());
  },
  "cmp-need-help": async () => {
    await import(/* webpackChunkName: 'need-help' */ "./dynamic-modules/need-help/need-help-module").then((obj) => obj.NEED_HELP_MODULE());
  },
  "cmp-non-actionable-box": async () => {
    await import(/* webpackChunkName: 'non-actionable' */ "./dynamic-modules/non-actionable-box/non-actionable-box").then((obj) => obj.NON_ACTIONABLE_BOX());
  },
};

const ALREADY_LOADED_SCRIPTS = {};

//  Dynamic Components Loader
//
//  Loops through dynamic components registered, if found on page, loads their chunk dynamically.
const DYNAMIC_COMPONENTS = {
  init: () => {
    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        // execute the dynamic import & init script registered
        if (entry.isIntersecting) {
          DYNAMIC_MODULE[entry.target.attributes["data-component"].nodeValue]();
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(callback);
    // loop through each registered dynamic component
    Object.keys(DYNAMIC_MODULE).forEach((component) => {
      const componentContext = Array.from(document.querySelectorAll(`div[data-component=${component}]`));
      // if component found on page
      if (componentContext[0]) {
        // check if script not already loaded
        if (!ALREADY_LOADED_SCRIPTS[component]) {
          // record script state
          ALREADY_LOADED_SCRIPTS[component] = true;
          componentContext.forEach((target) => observer.observe(target));
        }
      }
    });
  },
};

export default DYNAMIC_COMPONENTS;
