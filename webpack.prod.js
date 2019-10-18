const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    // 启用UglifyJsPlugin
    mode: 'production',
})