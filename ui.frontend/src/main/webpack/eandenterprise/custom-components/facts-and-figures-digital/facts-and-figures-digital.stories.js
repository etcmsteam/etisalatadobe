import componentTemplate from './facts-and-figures-digital.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Facts-and-Figures-Digital',
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

export const FactsAndFiguresDigitalDefault = Template.bind({});

FactsAndFiguresDigitalDefault.args = {
  // default values for controls
  title: 'Facts-and-Figures-Digital',
  // title: 'This is awesome title module  1 3 from storybook',
};
