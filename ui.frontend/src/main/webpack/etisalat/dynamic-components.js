/* eslint-disable max-len */
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
  "cmp-tile-box": async () => {
    await import(/* webpackChunkName: 'tilebox' */ "./dynamic-modules/tilebox/tilebox").then((obj) => obj.TILE_BOX());
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
    await import(/* webpackChunkName: 'storelocator' */ "./dynamic-modules/storelocator/store-locator").then((obj) => obj.STORE_LOCATOR());
  },
  "cmp-non-actionable-box": async () => {
    await import(/* webpackChunkName: 'non-actionable' */ "./dynamic-modules/non-actionable-box").then((obj) => obj.NON_ACTIONABLE_MODULE());
  },
  "cmp-context-navigation": async () => {
    await import(/* webpackChunkName: 'context-navigation' */ "./dynamic-modules/context-navigation/context-navigation").then((obj) =>
      obj.CONTEXT_NAVIGATION(),
    );
  },
  "cmp-benefits": async () => {
    await import(/* webpackChunkName: 'benefits-section' */ "./dynamic-modules/benefits/benefits").then((obj) => obj.BENIFITS());
  },
  "cmp-config-tabs": async () => {
    await import(/* webpackChunkName: 'config-tabs' */ "./dynamic-modules/config-tabs/config-section").then((obj) => obj.CONFIG_SECTION_WRAP());
  },
  "cmp-anaemarati-plans": async () => {
    await import(/* webpackChunkName: 'anaemarati-plans' */ "./dynamic-modules/anaemarati-plans/anaemarati-plans").then((obj) => obj.ANAEMARATI_CARDS());
  },
  "cmp-product-cards": async () => {
    await import(/* webpackChunkName: 'product-cards' */ "./dynamic-modules/product-cards/product-cards").then((obj) => obj.PRODUCT_CARDS());
  },
  "cmp-digital-notification": async () => {
    await import(/* webpackChunkName: 'digital-notification' */ "./dynamic-modules/digital-notifications/digital_notification").then((obj) => obj.DIGITAL_NOTIFICATION());
  },
  "cmp-news-room": async () => {
    await import(/* webpackChunkName: 'news-room' */ "./dynamic-modules/news-room/news-room").then((obj) => obj.NEWS_ROOM());
  },
  "cmp-related-jobs": async () => {
    await import(/* webpackChunkName: 'related-jobs' */ "./dynamic-modules/related-jobs/related-jobs").then((obj) => obj.RELATED_JOBS());
  },
  "cmp-forms-module": async () => {
    await import(/* webpackChunkName: 'forms' */ "./dynamic-modules/forms/forms").then((obj) => obj.FORMS_MODULE());
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
          DYNAMIC_MODULE[entry.target.attributes["data-component"].nodeValue]().catch((error) => {
            console.error("Dynamic Module Script Error: ", error);
          });
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
