const path = require('path');

const public = path.resolve(__dirname, 'public');
const dev = path.resolve(__dirname, 'dev', 'index.js');

const config = {
  entry: dev,
  
  output: {
    path: public,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, use: ['style-loader','css-loader', 'sass-loader'] }
    ]
  }
}

module.exports = config;