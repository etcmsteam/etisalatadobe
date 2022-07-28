import componentTemplate from './key-four-facts-module.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Key Facts and Figures',
  argTypes: {
    bgVariationClass: {
      control: { type: 'select' },
      options: ['bg-white', 'bg-beige', 'bg-beige-light', 'bg-maroon', 'bg-maroon-light', 'boxes'],
    },
  },
};

const Template = (args) => {
  return Mustache.render(componentTemplate, args);
};

export const KeyFactsAndFiguresDefault = Template.bind({});

KeyFactsAndFiguresDefault.args = {
  bgVariationClass: 'bg-white',
};
