
// Stylesheets
import './main.scss';
import $ from 'jquery';
// We need to expose jQuery as global variable
// eslint-disable-next-line no-multi-assign
window.jQuery = window.$ = $;

// ES6 import does not work it throws error: Missing jQuery
// using Node.js style import works without problems
require('bootstrap/js/tab');
require('bootstrap/js/collapse');
require('bootstrap/js/transition');

import { MEGA_MENU_DIGITAL } from './custom-components/maga-menu-digital';
import { TOP_NAV_DIGITAL } from './custom-components/maga-menu-digital';
import { ICONS_ON_TOP_IMAGE_DIGITAL } from './custom-components/icons-on-top-image-digital';
import { BENEFITS_DIGITAL } from './custom-components/benefits-digital';
import { TESTIMONIAL_QUOTE_DIGITAL } from './custom-components/testimonial-quote-digital';
import { IMAGE_WITH_ICONS_DIGITAL } from './custom-components/image-with-icons-digital';
import { HERO_BANNER_DIGITAL } from './custom-components/hero-banner-digital';
import { FEATURE_IN_TAB2_2_0 } from './custom-components/feature-in-tab2-2-0/feature-in-tab2-2-0';
import { FEATURE_IN_TAB_CTA_2_0 } from './custom-components/features-tabs-cta-2-0/features-tabs-cta-2-0';
import { CARDS_CAROUSEL_DIGITAL } from './custom-components/cards-carousels-digital/cards-carousel-digital';
import { ICON_CARDS_CAROUSEL } from './custom-components/icon-cards-carousel';
import { FAQ_TWO_COLS_ACCORDION } from './custom-components/faq-two-cols-2-0/faq-two-cols-2-0';
import { PARTNERS_LOGO_DIGITAL } from './custom-components/partners-logo-digital/partners-logo-digital';
const components = {
  MEGA_MENU_DIGITAL,
  TOP_NAV_DIGITAL,
  ICONS_ON_TOP_IMAGE_DIGITAL,
  TESTIMONIAL_QUOTE_DIGITAL,
  IMAGE_WITH_ICONS_DIGITAL,
  BENEFITS_DIGITAL,
  HERO_BANNER_DIGITAL,
  FEATURE_IN_TAB2_2_0,
  FEATURE_IN_TAB_CTA_2_0,
  CARDS_CAROUSEL_DIGITAL,
  ICON_CARDS_CAROUSEL,
  FAQ_TWO_COLS_ACCORDION,
  PARTNERS_LOGO_DIGITAL
};
const componentInited = {};

function onDigitalComponent() {
  const $this = $(this);
  const { digitalComponent } = $this.data();
  const componentFn = components[digitalComponent];

  if (typeof componentFn === 'function' && !componentInited[digitalComponent]) {
    try {
      /*
      Note: The existing B2C code written in a way that it expect to run only once.
      The "this" context will not work for multiple instance component, it will give you only first component
      instance due to !componentInited[digitalComponent] check.

      Use the this context with caution.
      */
      componentFn.call(this, this);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Module Script Error: ', error);
    }
    componentInited[digitalComponent] = true;
  }
}

$(() => {
  $('[data-digital-component]').each(onDigitalComponent);
});
