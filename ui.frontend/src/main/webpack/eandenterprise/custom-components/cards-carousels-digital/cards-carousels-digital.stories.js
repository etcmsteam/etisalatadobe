import componentTemplate from './cards-carousel-digital.html';
import { CARDS_CAROUSEL_DIGITAL } from './cards-carousel-digital';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Benefits Digital',
  argTypes: {   
    backgrounds: {
      control: { type: 'select' },
      options: ['default','bg-beige-light'],
    },
    patterns : {
      control: { type: 'select' },
      options: ['default','has-pattern'],
    }
  },
};

const Template = (args) => {
  return Mustache.render(componentTemplate, args);
};

export const CardCarouselDefault = Template.bind({});

CardCarouselDefault.play = async () => {
  CARDS_CAROUSEL_DIGITAL();
};

CardCarouselDefault.args = {};
