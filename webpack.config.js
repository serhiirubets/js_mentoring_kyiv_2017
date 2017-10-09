const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/main.js',
    vendor: ['jquery', 'lodash'],
  },
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/, loader: 'style!css',
      },
    ],
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),

    new BundleAnalyzerPlugin({

    }),
    new ExtractTextPlugin('styles.css'),
  ],
};
