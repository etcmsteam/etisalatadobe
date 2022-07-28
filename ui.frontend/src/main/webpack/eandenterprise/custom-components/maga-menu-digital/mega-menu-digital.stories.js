import featureTemplate from './mega-menu-digital.html';
import { MEGA_MENU_DIGITAL } from './mega-menu-digital';
import { TOP_NAV_DIGITAL } from './top-nav-digital';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Mega Menu Digital',
  argTypes: {},
};

const Template = (args) => {
  return Mustache.render(featureTemplate, args);
};

export const MegaMenuDigitalDefault = Template.bind({});
MegaMenuDigitalDefault.play = async () => {
  MEGA_MENU_DIGITAL();
  TOP_NAV_DIGITAL();
};

MegaMenuDigitalDefault.args = {};
