import componentTemplate from './prom-grid-digital.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Promo-Grid-Digital',
  argTypes: {
    title: { type: 'text' },
    backgroundColor: {
      control: { type: 'select' },
      options: ['bg-maroon', 'bg-maroon-light', 'bg-white', 'bg-beige', 'bg-beige-light'],
    },
  },
};

const Template = (args) => {
  return Mustache.render(componentTemplate, args);
};

export const PromoGridDigitalDefault = Template.bind({});

PromoGridDigitalDefault.args = {
  // default values for controls
  title: 'Promo-Grid-Digital',
  // title: 'This is awesome title module  1 3 from storybook',
};
