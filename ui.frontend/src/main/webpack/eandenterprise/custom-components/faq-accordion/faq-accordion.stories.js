/* eslint-disable */
import componentTemplate from './faq-accordion.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Faq-Accordion',
  argTypes: {
    title: { type: 'text' },
    backgroundColor: {
      control: { type: 'select' },
      options: [],
    },
  },
};

const Template = (args) => {
  return Mustache.render(componentTemplate, args);
};

export const FaqAccordion = Template.bind({});

FaqAccordion.args = {
  title: 'Faq-Accordion',
};

