const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
require('babel-polyfill')

module.exports = {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.jsx$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.png$/, use: 'url-loader'},
      { test: /\.jpg$/, use: 'url-loader'},
    ]
  },
  node: {
    fs: "empty"
 },
  mode: 'development',
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/index.html'
    })
  ]
}