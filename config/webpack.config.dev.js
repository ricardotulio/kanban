'use strict'

const getClientEnvironment = require('./env')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')
const paths = require('./paths')

const env = getClientEnvironment('/')

module.exports = {
  entry: {
    index: glob.sync('./src/**/*.js'),
  },
  output: {
    filename: 'js/[hash].bundle.js',
    path: paths.appBuild,
    publicPath: paths.publicPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'env' ],
          },
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader',
        }),
      }
    ],
  },
  plugins: [
    new InterpolateHtmlPlugin(env.raw),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new ExtractTextPlugin('css/[hash].bundle.css'),
  ],
}
