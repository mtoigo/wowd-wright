var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin')


var scriptsPath = path.resolve(__dirname, 'build', 'scripts');

var sitejs = ['./scripts/site.js'];

var sourceScripts = sitejs;

var config = {
  entry: sourceScripts,
  output: {
    path: scriptsPath,
    filename: 'site-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    }),
    new CopyWebpackPlugin([{ from: './scripts/components.bundle.js', to: 'components.bundle.js' }])
  ]
};

module.exports = config;
