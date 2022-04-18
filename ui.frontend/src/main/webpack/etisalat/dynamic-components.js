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
    await import(/* webpackChunkName: 'non-actionable' */ "./dynamic-modules/non-actionable-box").then((obj) => obj.NON_ACTIONABLE_MODULE());
  },
  "cmp-tile-box": async () => {
    await import(/* webpackChunkName: 'tile-box' */ "./dynamic-modules/tile-box/tile-box").then((obj) => obj.TILE_BOX());
  },
  "cmp-features": async () => {
    await import(/* webpackChunkName: 'features' */ "./dynamic-modules/features/features").then((obj) => obj.FEATURE_MODULE());
  },
  "cmp-promogrid-4-0": async () => {
    await import(/* webpackChunkName: 'promo-grid-4-0' */ "./dynamic-modules/promo-grid-4-0/promo-grid-4-0").then((obj) => obj.PROMO_GRID_4_0());
  },
  "media-cta": async () => {
    await import(/* webpackChunkName: 'media-cta' */ "./dynamic-modules/media-cta/media-cta").then((obj) => obj.MEDIA_CTA());
  },
  "cmp-storelocator": async () => {
    await import(/* webpackChunkName: 'media-cta' */ "./dynamic-modules/storelocator/store-locator").then((obj) => obj.STORE_LOCATOR());
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
