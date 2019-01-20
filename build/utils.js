/**
 * Created by lei.wang on 2019/1/15.
 */
const path = require('path');
const config = require('../config/webpack');

exports.assetsPath = (_path) => {
    const assetsSubDirectory = config.build.assetsRoot;
    console.log('assetsSubDirectory: ', assetsSubDirectory);
    console.log('_path: ', _path);
    return path.posix.join(assetsSubDirectory, _path);
};
