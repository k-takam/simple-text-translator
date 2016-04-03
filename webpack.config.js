const path = require('path');
const webpack = require('webpack');
const saveLicense = require('uglify-save-license');

module.exports = {
  cache: true,
  entry: './src/scripts/index.js',
  output: {
    path: __dirname + '/dist/',
    publicPath: "/dist/",
    filename: 'bundle.js'
  },
  externals: {
    "jspdf": "jsPDF"
  },
  devtool: 'inline-source-map',
  resolve: {
    root: [path.join(__dirname, 'node_modules')],
    extensions: ['', '.js', '.jsx', '.css', '.scss', '.sass']
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: saveLicense
      }
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.js|\.jsx$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'react'] }
      }
    ]
  },
  node: { fs: 'empty' },
  eslint: { configFile: '.eslintrc' }
};
