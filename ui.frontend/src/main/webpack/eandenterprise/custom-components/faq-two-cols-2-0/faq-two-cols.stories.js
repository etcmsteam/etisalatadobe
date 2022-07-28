/* eslint-disable */
import faq2ColsTemplate from './faq-two-cols-2-0.html';
import { FAQ_TWO_COLS_ACCORDION } from './faq-two-cols-2-0';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/features FAQ Two Cols 2.0',
  argTypes: {
    backgrounds: {
      control: { type: 'select' },
      defaultValue: 'bg-maroon',
      options: ['bg-maroon','bg-beige-light'],
    },
  },
};

const Template = (args) => {
  return Mustache.render(faq2ColsTemplate, args);
};

export const faq_2_cols = Template.bind({});
faq_2_cols.play = async () => {
  FAQ_TWO_COLS_ACCORDION();
};
