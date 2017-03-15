const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env  = require('yargs').argv.env;
const CopyWebpackPlugin = require('copy-webpack-plugin');

let libraryName = 'EasyParticlesBackground';
// let libraryUnderscoreName = 'easy-particles-background.min.js';

let plugins = [], outputFile;


if(env === 'build') {
  outputFile = libraryName + '.min.js';
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  // plugins.push(new CopyWebpackPlugin([
  //   { from: './dist/' + outputFile, to: './../demo/' + libraryUnderscoreName },
  // ]));
} else {
  outputFile = libraryName + '.js';
}

const config = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: './dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'var',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
};

module.exports = config;
