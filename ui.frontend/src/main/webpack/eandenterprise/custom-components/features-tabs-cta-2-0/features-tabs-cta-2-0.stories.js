/* eslint-disable */
import featureTemplate from './features-tabs-cta-2-0.html';
import { FEATURE_IN_TAB_CTA_2_0 } from './features-tabs-cta-2-0';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/features tabs cta 2.0',
  argTypes: {
    backgrounds: {
      control: { type: 'select' },
      defaultValue: 'bg-white',
      options: ['bg-maroon', 'bg-maroon-light', 'bg-white', 'bg-beige', 'bg-beige-light'],
    },
  },
};

const Template = (args) => {
  return Mustache.render(featureTemplate, args);
};

export const FeatureInTabCta2_0 = Template.bind({});
FeatureInTabCta2_0.play = async () => {
  FEATURE_IN_TAB_CTA_2_0();
};
