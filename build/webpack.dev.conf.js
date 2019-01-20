/**
 * Created by lei.wang on 2019/1/14.
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackBaseConfig = require('./webpack.base.conf');
const config = require('../config/webpack');
const pages = require('../config/pages');

const htmlWebpackPlugins = pages.map(page => new HtmlWebpackPlugin(page));

module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.': config.dev.env
        }),
        ...htmlWebpackPlugins
    ]
});
