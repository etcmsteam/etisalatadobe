import componentTemplate from './icon-with-description-digital.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Icon-with-Description-Digital',
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

export const IconWithDescriptionDigitalDefault = Template.bind({});
IconWithDescriptionDigitalDefault.play = async () => {};

IconWithDescriptionDigitalDefault.args = {
  // default values for controls
  title: 'Icon-with-Description-Digital',
  // title: 'This is awesome title module  1 3 from storybook',
};
