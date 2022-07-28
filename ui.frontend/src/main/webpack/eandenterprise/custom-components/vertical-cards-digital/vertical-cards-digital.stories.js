import componentTemplate from './vertical-cards-digital.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Vertical-Cards-Digital',
  argTypes: {
    // add any controlls
    // color: { control: 'color' },
    title: { type: 'text' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
    backgrounds: {
      control: { type: 'select' },
      options: ['default','bg-beige-light'],
    },
  },
};

const Template = (args) => {
  return Mustache.render(componentTemplate, args);
};

export const VerticalCardsDigitalDefault = Template.bind({});

VerticalCardsDigitalDefault.play = async () => {
};

VerticalCardsDigitalDefault.args = {
  // default values for controls
  title: 'Vertical-Cards-Digital',
  // title: 'This is awesome title module  1 3 from storybook',
};
