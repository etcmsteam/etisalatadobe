import componentTemplate from './icon-cards-carousel.html';
import { ICON_CARDS_CAROUSEL } from './icon-cards-carousel';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Icon-Cards-Carousel',
  argTypes: {
    title: { type: 'text' },
    boxColor: {
      control: { type: 'select' },
      options: ['', 'box-bg-lgrey', 'box-sand-bg'],
    },
    backgroundColor: {
      control: { type: 'select' },
      options: ['bg-maroon', 'bg-maroon-light', 'bg-white', 'bg-beige', 'bg-beige-light'],
    },
  },
};

const Template = (args) => {
  return Mustache.render(componentTemplate, args);
};

export const IconCardsCarouselDefault = Template.bind({});

IconCardsCarouselDefault.play = () => {
  ICON_CARDS_CAROUSEL();
};
