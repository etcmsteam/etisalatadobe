import componentTemplate from './benefits-digital.html';
import { BENEFITS_DIGITAL } from './benefits-digital';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Benefits Digital',
  argTypes: { },
};

const Template = (args) => {
  return Mustache.render(componentTemplate, args);
};

export const BenefitsDigitalDefault = Template.bind({});

BenefitsDigitalDefault.play = async () => {
  BENEFITS_DIGITAL();
};

BenefitsDigitalDefault.args = {};
