var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'frontend', 'lib', 'index.jsx'),
  output: {path: path.join(__dirname, 'frontend', 'dist'), filename: 'bundle.js'},
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /frontend[\/\\]lib[\/\\].+\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};