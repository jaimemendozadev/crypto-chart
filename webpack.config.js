const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const public = path.resolve(__dirname, 'public');
const styles = path.resolve(__dirname, '/public/styles');
const dev = path.resolve(__dirname, 'dev', 'index.js');

console.log("styles is ", styles);

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
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]
}

module.exports = config;