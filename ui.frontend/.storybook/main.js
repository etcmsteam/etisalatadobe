const customConfig = require('../webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const eAndEnterprisePurgeCSSPluginConfig = require('../purgecss.config');

module.exports = {
  previewHead: (head) => {
    return `
    ${head}
    <style>
    .sb-show-main.sb-main-padded {
      padding: 0;
     }
    </style>
  `;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/html',
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config

    config.entry.push(customConfig.entry.eandenterprise);

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[name].[hash].css',
      }),
      new PurgeCSSPlugin({
        ...eAndEnterprisePurgeCSSPluginConfig,
      })
    );

    config.module.rules = config.module.rules.filter((item) => {
      return item.use?.indexOf('html-loader') > 0 ? false : true;
    });

    config.module.rules = [
      ...config.module.rules,
      ...customConfig.module.rules,
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: false,
          attrs: false,
        },
      },
    ];

    return config;
  },

  staticDirs: ['../src/static', '../src/main/webpack/eandenterprise'],
};
