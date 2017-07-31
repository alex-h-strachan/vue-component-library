const { resolve } = require('path');
const entries = require('../../manifest');

module.exports = {
  entry: entries,
  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: 'vue-style-loader!css-loader!sass-loader', // use scss by default for styles
          },
        },
      },
    ],
  },
};
