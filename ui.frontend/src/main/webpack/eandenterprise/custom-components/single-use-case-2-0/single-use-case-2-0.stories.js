import componentTemplate from './single-use-case-2-0.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Single-Use-Case-2.0',
   argTypes: {
    title: { type: 'text' },
    backgrounds: {
        control: { type: 'select' },
    },
  },
};

const Template = (args) => {
  return Mustache.render(componentTemplate, args);
};

export const SingleUseCase = Template.bind({});

SingleUseCase.args = {
  // default values for controls
  title: 'Single-Use-Case-2.0',
  // title: 'This is awesome title module  1 3 from storybook',
};
