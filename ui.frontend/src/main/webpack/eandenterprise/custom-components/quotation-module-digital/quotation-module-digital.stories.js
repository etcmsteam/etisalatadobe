import componentTemplate from './quotation-module-digital.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Quotation-Module-Digital',
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

export const QuotationModuleDigitalDefault = Template.bind({});
// QuotationModuleDigitalDefault.play = async () => {
// };

QuotationModuleDigitalDefault.args = {
  // default values for controls
  title: 'Quotation-Module-Digital',
  // title: 'This is awesome title module  1 3 from storybook',
};
