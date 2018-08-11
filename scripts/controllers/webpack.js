// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
};

// Webpack configuration
module.exports = {
  entry: [path.join(paths.SRC, 'index.js')],
  output: {
    path: paths.DIST,
    filename: 'mercury.js',
  },
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};