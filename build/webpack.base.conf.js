/**
 * Created by lei.wang on 2019/1/14.
 */
const path = require('path')
const pages = require('../config/pages')
const utils = require('./utils')
const config = require('../config/webpack')

function resolve (_path) {
  return path.resolve(__dirname, '..', _path)
}

const entry = {}

pages.forEach((page) => {
  entry[page.entry.key] = page.entry.file
})

module.exports = {
  entry: entry,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpeg|gif|svg)?$/,
        loader: 'url-loader',
        query: {
          limit: 4000,
          name: utils.assetsPath('img/[name].[hash:8].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'url-loader',
        query: {
          limit: 4000,
          name: utils.assetsPath('fonts/[name].[hash:8].[ext]')
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      root: resolve(''),
      '@': resolve('client'),
      utils: resolve('utils')
    }
  }
}
