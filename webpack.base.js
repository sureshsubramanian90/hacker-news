const ExtractCssChunks = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');


const CompressionPlugin = require('compression-webpack-plugin');

const buildMode = process.env.NODE_ENV;
const isDev = (buildMode === 'development');

const webPackPlugins = [
  new ExtractCssChunks({
    filename: 'css/[name].css',
  }),
  new CopyPlugin([
    {
      from: './src/assets/images',
      to: ``
    },
    {
      from: './robots.txt',
      to: ``
    }
  ]),
  new MinifyPlugin(),
  new CompressionPlugin(),
];
module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          ExtractCssChunks.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            ['@babel/env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  },
  plugins: webPackPlugins,
  optimization: {
    minimizer: [
        new UglifyJsPlugin({
            uglifyOptions: {
                output: {
                    comments: false
                },
                minify: {},
                compress: {
                    booleans: true,
                    //...
                }
            }
        }),
    ]
  },
};
