import featureTemplate from './feature-highlights.html';
import Mustache from 'mustache';

export default {
  title: 'E& Enterprise/Feature Highlights',
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      options: ['bg-maroon', 'bg-beige', 'bg-beige-light', 'bg-beige-light', 'bg-maroon-light'],
    },
    backgroundType: {
      control: { type: 'select' },
      options: ['has-bg-top'],
    },
    contentAlignment: {
      control: { type: 'multi-select' },
      options: ['c-center', 'h-center', 'c-right'],
    },
    gridVariations: {
      control: { type: 'select' },
      defaultValue: 'icons-3columns',
      options: ['icons-3columns', 'icons-4columns'],
    },
  },
};

const Template = (args) => {
  const contentAlignment = args.contentAlignment?.toString().replaceAll(/,/g, ' ');
  return Mustache.render(featureTemplate, {
    ...args,
    contentAlignment
  });
};

export const FeatureHighlights = Template.bind({});
