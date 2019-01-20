/**
 * Created by lei.wang on 2019/1/14.
 */
var path = require('path');

module.exports = [
    {
        entry: {
            key: 'app',
            file: path.resolve(__dirname, '../client/index.js')
        },
        filename: 'index.html',
        template: path.resolve(__dirname, '../client/templates/index.html')
    }
];
