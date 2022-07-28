import componentTemplate from './contact-us-2-0.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Contact-Us-2-0',
  argTypes: {
    title: { type: 'text' },
    description: { type: 'text' },
    linkTitle: { type: 'text' },
    linkUrl: { type: 'text' },
    backgroundColor: {
      control: { type: 'select' },
      options: {'Maroon Light':'bg-maroon-light', 'Beige Light': 'bg-beige-light'}
    },
  },
};

const Template = (args) => {
  return Mustache.render(componentTemplate, { properties: args });
};

export const ContactUs_2_0Default = Template.bind({});

ContactUs_2_0Default.args = {
  // default values for controls
  title: 'Lets work together',
  description: 'Embrace changes as our Industry experts around digital transformation, and Innovation across cloud and Edge - help you build a better tomorrow.',
  linkTitle: 'Get in Touch',
  linkUrl: '#',
  backgroundColor: 'bg-beige-light'
  // title: 'This is awesome title module  1 3 from storybook',
};
