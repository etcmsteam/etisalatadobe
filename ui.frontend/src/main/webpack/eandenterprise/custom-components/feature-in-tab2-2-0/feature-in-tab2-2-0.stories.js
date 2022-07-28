/* eslint-disable */
import featureTemplate from './feature-in-tab2-2-0.html';
import { FEATURE_IN_TAB2_2_0 } from './feature-in-tab2-2-0';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/features tabs2 2 0',
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

export const FeatureInTab2_2_0 = Template.bind({});
FeatureInTab2_2_0.play = async () => {
  FEATURE_IN_TAB2_2_0();
};
