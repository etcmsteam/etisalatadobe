import componentTemplate from './media-text-cta-digital.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Media-Text-Cta-Digital',
  argTypes: {
    // add any controlls
    // color: { control: 'color' },
    title: { type: 'text' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
    backgrounds: {
      control: { type: 'select' },
      options: ['default','bg-beige-light', 'bg-maroon-light', 'bg-maroon'],
    },
    btnbackgrounds: {
      control: { type: 'select' },
      options: ['default','white-btn'],
    },
  },
};

const Template = (args) => {
  return Mustache.render(componentTemplate, args);
};

export const MediaTextCtaDigitalDefault = Template.bind({});

MediaTextCtaDigitalDefault.args = {
  // default values for controls
  title: 'Media-Text-Cta-Digital',
  // title: 'This is awesome title module  1 3 from storybook',
};
