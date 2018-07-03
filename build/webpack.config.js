const path = require('path');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  mode: 'development',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, '../assets')
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve('../src'),
          path.resolve('../test')
        ]}
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};