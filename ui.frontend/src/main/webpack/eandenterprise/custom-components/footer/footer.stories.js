import featureTemplate from './footer-2-0.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Footer',
  argTypes: {
    whiteLogo: {
      control: { type: 'boolean' },
    },
    bgVariationClass: {
      control: { type: 'select' },
      options: ['', 'bg-maroon', 'bg-maroon-light', 'bg-beige-light', 'bg-beige'],
    },
  },
};

const Template = (args) => {
  return Mustache.render(featureTemplate, args);
};

export const FooterDefault = Template.bind({});

FooterDefault.args = {
  whiteLogo: true,
};
