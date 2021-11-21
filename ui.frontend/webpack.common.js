'use strict'

const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

const SOURCE_ROOT = __dirname + '/src/main/webpack'

const resolve = {
  extensions: ['.js'],
}

module.exports = {
  resolve: resolve,
  entry: {
    base: SOURCE_ROOT + '/base/main.js',
    gochat: SOURCE_ROOT + '/gochat/main.js',
    etisalat: SOURCE_ROOT + '/etisalat/main.js',
    fivemobile: SOURCE_ROOT + '/fivemobile/main.js',
    hiuapp: SOURCE_ROOT + '/hiuapp/main.js',
    ewallet: SOURCE_ROOT + '/ewallet/main.js',
  },
  output: {
    filename: 'clientlib-[name]/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              failOnError: false,
              emitWarning: true,
            },
          },
          {
            loader: 'glob-import-loader',
            options: {
              resolve: resolve,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [require('autoprefixer')];
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'glob-import-loader',
            options: {
              resolve: resolve,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new StylelintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.scss',
      failOnError: false,
      quiet: false,
      emitErrors: true, // by default this is to true to check the CSS lint errors
    }),
    new CleanWebpackPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'clientlib-[name]/[name].css',
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, SOURCE_ROOT + '/base/resources'), to: './clientlib-base/' },
      { from: path.resolve(__dirname, SOURCE_ROOT + '/gochat/resources'), to: './clientlib-gochat/' },
      { from: path.resolve(__dirname, SOURCE_ROOT + '/etisalat/resources'), to: './clientlib-etisalat/' },
      { from: path.resolve(__dirname, SOURCE_ROOT + '/fivemobile/resources'), to: './clientlib-fivemobile/' },
      { from: path.resolve(__dirname, SOURCE_ROOT + '/hiuapp/resources'), to: './clientlib-hiuapp/' },
      { from: path.resolve(__dirname, SOURCE_ROOT + '/ewallet/resources'), to: './clientlib-ewallet/' },
    ]),
  ],
  stats: {
    assetsSort: 'chunks',
    builtAt: true,
    children: false,
    chunkGroups: true,
    chunkOrigins: true,
    colors: false,
    errors: true,
    errorDetails: true,
    env: true,
    modules: false,
    performance: true,
    providedExports: false,
    source: false,
    warnings: true,
  },
};
