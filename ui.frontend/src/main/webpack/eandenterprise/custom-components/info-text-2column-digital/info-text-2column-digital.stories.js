import componentTemplate from './info-text-2column-digital.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Info-Text-2column-Digital',
  argTypes: {
    // add any controlls
    // color: { control: 'color' },
    title: { type: 'text' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
    // backgrounds: {
    //   control: { type: 'select' },
    //   options: ['green', 'red', 'blue'],
    // },
  },
};

const Template = (args) => {
  return Mustache.render(componentTemplate, args);
};

export const InfoText_2columnDigitalDefault = Template.bind({});

InfoText_2columnDigitalDefault.args = {
  // default values for controls
  title: 'Info-Text-2column-Digital',
  // title: 'This is awesome title module  1 3 from storybook',
};
