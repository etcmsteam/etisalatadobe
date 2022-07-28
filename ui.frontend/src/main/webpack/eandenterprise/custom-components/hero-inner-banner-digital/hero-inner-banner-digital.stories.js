import componentTemplate from './hero-inner-banner-digital.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/HERO_INNER_BANNER_DIGITAL',
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

export const HeroInnerBannerDigitalDefault = Template.bind({});

HeroInnerBannerDigitalDefault.args = {
  // default values for controls
  title: 'HERO_INNER_BANNER_DIGITAL',
  // title: 'This is awesome title module  1 3 from storybook',
};
