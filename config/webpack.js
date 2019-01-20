/**
 * Created by lei.wang on 2019/1/15.
 */
const path = require('path');

module.exports = {
    dev: {
        env: {
            NODE_ENV: 'development'
        },
        host: 'localhost',
        port: 8081,
        assetsPublicPath: '/'
    },

    build: {
        env: {
            NODE_ENV: 'production'
        },
        assetsRoot: path.resolve(__dirname, '../dist/umaru'),
        assetsPublicPath: '/'
    }
};
