import componentTemplate from './info-text-with-logo-digital.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Info-Text-with-Logo-Digital',
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

export const InfoTextWithLogoDigitalDefault = Template.bind({});

InfoTextWithLogoDigitalDefault.args = {
  // default values for controls
  title: 'Info-Text-with-Logo-Digital',
  // title: 'This is awesome title module  1 3 from storybook',
};
