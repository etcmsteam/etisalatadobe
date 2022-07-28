import componentTemplate from './image-with-icons-digital.html';
import { IMAGE_WITH_ICONS_DIGITAL } from './image-with-icons-digital';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Image-with-Icons-Digital',
  argTypes: {
    // add any controlls
    // color: { control: 'color' },
    title: { type: 'text' },
    backgroundColor: {
      control: { type: 'select' },
      options: ['bg-maroon', 'bg-maroon-light', 'bg-white', 'bg-beige', 'bg-beige-light'],
    },
  },
};

const Template = (args) => {
  return Mustache.render(componentTemplate, args);
};

export const ImageWithIconsDigitalDefault = Template.bind({});
ImageWithIconsDigitalDefault.play = async () => {
  IMAGE_WITH_ICONS_DIGITAL();
};

ImageWithIconsDigitalDefault.args = {
  // default values for controls
  title: 'Image-with-Icons-Digital',
  // title: 'This is awesome title module  1 3 from storybook',
};
