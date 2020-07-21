const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const buildMode = process.env.NODE_ENV;
const isDev = (buildMode === 'development');

const webPackPlugins = [
  new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'gzip',
      reportFilename: '../../admin/assets/client-report.html',
      openAnalyzer: false,
  }),
];
const config = {
  target: 'web',
  // Tell webpack to root file of our server app
  entry: './src/client.js',
  // Tell webpack where to put output file
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: webPackPlugins,
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  
};

module.exports = merge(baseConfig, config);
