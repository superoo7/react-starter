const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

const dist = 'dist';

module.exports = {
  context: __dirname,
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new workboxPlugin({
      globDirectory: dist,
      globPatterns: ['**/*.{html,js}'],
      swDest: path.join(dist, 'sw.js'),
      clientsClaim: true,
      skipWaiting: true
    })
  ]
};
