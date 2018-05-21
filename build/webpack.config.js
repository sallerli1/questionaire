const path = require('path');

module.exports = {
  entry: path.join(__dirname, '../src', "index.js"),
  mode: 'development',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, '../assets')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  }
};