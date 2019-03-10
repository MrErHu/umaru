const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackBaseConfig = require('./webpack.base.conf')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  entry: path.resolve(__dirname, '../ui/app.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist/ui'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.': {
        NODE_ENV: 'development'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../ui/template/index.html')
    })
  ]
})
