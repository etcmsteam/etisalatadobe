import componentTemplate from './hero-banner-digital.html';
import { HERO_BANNER_DIGITAL } from './hero-banner-digital';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Hero-Banner-Digital',
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

export const HeroBannerDigitalDefault = Template.bind({});

HeroBannerDigitalDefault.play = async () => {
  HERO_BANNER_DIGITAL();
};

HeroBannerDigitalDefault.args = {
  // default values for controls
  title: 'Hero-Banner-Digital',
  // title: 'This is awesome title module  1 3 from storybook',
};
