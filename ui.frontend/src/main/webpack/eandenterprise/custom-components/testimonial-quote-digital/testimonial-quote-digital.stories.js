import componentTemplate from './testimonial-quote-digital.html';
import { TESTIMONIAL_QUOTE_DIGITAL } from './testimonial-quote-digital';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Testimonial-Quote-Digital',
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

export const TestimonialQuoteDigitalDefault = Template.bind({});
TestimonialQuoteDigitalDefault.play = async () => {
  TESTIMONIAL_QUOTE_DIGITAL();
};

TestimonialQuoteDigitalDefault.args = {
  // default values for controls
  title: 'Testimonial-Quote-Digital',
  // title: 'This is awesome title module  1 3 from storybook',
};
