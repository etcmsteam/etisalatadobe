import componentTemplate from './{{dashCase name}}.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/{{titleCase name}}',
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

export const {{pascalCase name}}Default = Template.bind({});

{{pascalCase name}}Default.args = {
  // default values for controls
  title: '{{titleCase name}}',
  // title: 'This is awesome title module  1 3 from storybook',
};
