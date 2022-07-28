import componentTemplate from './partners-logo-digital.html';
import { PARTNERS_LOGO_DIGITAL } from './partners-logo-digital';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Partners-Logo-Digital',
  argTypes: {
    // add any controlls
    // color: { control: 'color' },
    title: { type: 'text' },
    backgrounds: {
      control: { type: 'select' },
      options: ['default','bg-beige-light'],
    },
  },
};

const Template = (args) => {
  return Mustache.render(componentTemplate, args);
};

export const PartnersLogoDigitalDefault = Template.bind({});

PartnersLogoDigitalDefault.play = async () => {
  PARTNERS_LOGO_DIGITAL();
};

PartnersLogoDigitalDefault.args = {
  // default values for controls
  title: 'Partners-Logo-Digital',
  // title: 'This is awesome title module  1 3 from storybook',
};
