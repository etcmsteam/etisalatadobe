import componentTemplate from './icons-on-top-image-digital.html';
import { ICONS_ON_TOP_IMAGE_DIGITAL } from './icons-on-top-image-digital';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Icons-on-Top-Image-Digital',
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      options: ['bg-maroon', 'bg-maroon-light', 'bg-white', 'bg-beige', 'bg-beige-light'],
    },
  },
};

const Template = (args) => {
  return Mustache.render(componentTemplate, args);
};

export const IconsOnTopImageDigitalDefault = Template.bind({});
IconsOnTopImageDigitalDefault.play = async () => {
  ICONS_ON_TOP_IMAGE_DIGITAL();
};

IconsOnTopImageDigitalDefault.args = {};
