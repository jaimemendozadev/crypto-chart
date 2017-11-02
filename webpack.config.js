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
      { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}

module.exports = config;