/* eslint-disable max-len */
import "regenerator-runtime/runtime";

// register the className of each dynamic component to it's own js chunk, and initialization call
const DYNAMIC_MODULE = {
  "cmp-herobanner": async () => {
    return import(/* webpackChunkName: 'hero-banner' */ "./dynamic-modules/hero-banner/hero-banner-4-0").then((obj) => obj.HERO_BANNER());
  },
  "cmp-accessoriescardcontainer": async () => {
    return import(/* webpackChunkName: 'accessories-card' */ "./dynamic-modules/accessories-cards/accessories-cards").then((obj) => obj.ACCESSORIES_CARDS());
  },
  "cmp-green-friday": async () => {
    return import(/* webpackChunkName: 'green-friday' */ "./dynamic-modules/green-friday/green-friday").then((obj) => obj.GREEN_FRIDAY());
  },
  "cmp-need-help": async () => {
    return import(/* webpackChunkName: 'need-help' */ "./dynamic-modules/need-help/need-help-module").then((obj) => obj.NEED_HELP_MODULE());
  },
  "cmp-tile-box": async () => {
    return import(/* webpackChunkName: 'tilebox' */ "./dynamic-modules/tilebox/tilebox").then((obj) => obj.TILE_BOX());
  },
  "cmp-features": async () => {
    return import(/* webpackChunkName: 'features' */ "./dynamic-modules/features/features").then((obj) => obj.FEATURE_MODULE());
  },
  "cmp-promogrid-4-0": async () => {
    return import(/* webpackChunkName: 'promo-grid-4-0' */ "./dynamic-modules/promo-grid-4-0/promo-grid-4-0").then((obj) => obj.PROMO_GRID_4_0());
  },
  "media-cta": async () => {
    return import(/* webpackChunkName: 'media-cta' */ "./dynamic-modules/media-cta/media-cta").then((obj) => obj.MEDIA_CTA());
  },
  "cmp-storelocator": async () => {
    return import(/* webpackChunkName: 'storelocator' */ "./dynamic-modules/storelocator/store-locator").then((obj) => obj.STORE_LOCATOR());
  },
  "cmp-non-actionable-box": async () => {
    return import(/* webpackChunkName: 'non-actionable' */ "./dynamic-modules/non-actionable-box").then((obj) => obj.NON_ACTIONABLE_MODULE());
  },
  "cmp-context-navigation": async () => {
    return import(/* webpackChunkName: 'context-navigation' */ "./dynamic-modules/context-navigation/context-navigation").then((obj) =>
      obj.CONTEXT_NAVIGATION(),
    );
  },
  "cmp-benefits": async () => {
    return import(/* webpackChunkName: 'benefits-section' */ "./dynamic-modules/benefits/benefits").then((obj) => obj.BENIFITS());
  },
  "cmp-config-tabs": async () => {
    return import(/* webpackChunkName: 'config-tabs' */ "./dynamic-modules/config-tabs/config-section").then((obj) => obj.CONFIG_SECTION_WRAP());
  },
  "cmp-anaemarati-plans": async () => {
    return import(/* webpackChunkName: 'anaemarati-plans' */ "./dynamic-modules/anaemarati-plans/anaemarati-plans").then((obj) => obj.ANAEMARATI_CARDS());
  },
  "cmp-product-cards": async () => {
    return import(/* webpackChunkName: 'product-cards' */ "./dynamic-modules/product-cards/product-cards").then((obj) => obj.PRODUCT_CARDS());
  },
  "cmp-digital-notification": async () => {
    return import(/* webpackChunkName: 'digital-notification' */ "./dynamic-modules/digital-notifications/digital_notification").then((obj) =>
      obj.DIGITAL_NOTIFICATION(),
    );
  },
  "cmp-news-room": async () => {
    return import(/* webpackChunkName: 'news-room' */ "./dynamic-modules/news-room/news-room").then((obj) => obj.NEWS_ROOM());
  },
  "cmp-related-jobs": async () => {
    return import(/* webpackChunkName: 'related-jobs' */ "./dynamic-modules/related-jobs/related-jobs").then((obj) => obj.RELATED_JOBS());
  },
  "cmp-guide-tour": async () => {
    return import(/* webpackChunkName: 'guide-tour' */ "./dynamic-modules/guide-tour/guide-tour").then((obj) => obj.GUIDE_TOUR_POPUP());
  },
  "cmp-forms-module": async () => {
    return import(/* webpackChunkName: 'forms' */ "./dynamic-modules/forms/forms").then((obj) => obj.FORMS_MODULE());
  },
  "cmp-table": async () => {
    return import(/* webpackChunkName: 'tables' */ "./dynamic-modules/table/table").then((obj) => obj.TABLE());
  },
  "cmp-device-best-seller": async () => {
    return import(/* webpackChunkName: 'best-seller' */ "./dynamic-modules/best-seller/device/device-best-seller").then((obj) => obj.DEVICE_BEST_SELLER());
  },
  "cmp-support-chat": async () => {
    return import(/* webpackChunkName: 'support-chat' */ "./dynamic-modules/support-chat").then((obj) => obj.SUPPORT_CHAT());
  },
  "cmp-idle-chat": async () => {
    return import(/* webpackChunkName: 'idle-chat' */ "./dynamic-modules/idle-chat").then((obj) => obj.IDLE_CHAT());
  },
};

const ALREADY_LOADED_SCRIPTS = {};

//  Dynamic Components Loader
//
//  Loops through dynamic components registered, if found on page, loads their chunk dynamically.
const DYNAMIC_COMPONENTS = {
  init: () => {
    let callback = (entries, observer) => {
      entries.forEach(async (entry) => {
        // execute the dynamic import & init script registered
        if (entry.isIntersecting) {
          const component = entry.target.attributes["data-component"].nodeValue;
          // check if script not already loaded
          if (!ALREADY_LOADED_SCRIPTS[component]) {
            // record script state
            ALREADY_LOADED_SCRIPTS[component] = true;

            try {
              const moduleFn = await DYNAMIC_MODULE[component]();
              if(typeof moduleFn === 'function') {
                moduleFn();
              }
            } catch (error) {
              console.error("Dynamic Module Script Error: ", error);
            }

            const placeholderClass = `${component}-placeholder`;
            document.querySelectorAll(`[data-component="${component}"], .${placeholderClass}`).forEach((item) => {
              const componentItem = item;

              if (componentItem.classList.contains(placeholderClass)) {
                componentItem.classList.add("hide");
              } else {
                componentItem.classList.remove("hide");
                componentItem.classList.add("dynamic-module-visible");
              }

            });
          }
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(callback, { rootMargin: "0px 0px 200px 0px" });
    // loop through each registered dynamic component
    Object.keys(DYNAMIC_MODULE).forEach((component) => {
      const componentContext = Array.from(document.querySelectorAll(`[data-component=${component}]`));
      // if component found on page
      if (componentContext[0]) {
        componentContext.forEach((target) => observer.observe(target));
      }
    });
  },
};

export default DYNAMIC_COMPONENTS;
