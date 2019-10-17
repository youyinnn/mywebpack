const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // Javascript执行文件的入口
    entry: {
        main: ['./main.js']
    },
    mode: 'development',
    // source-map
    devtool: 'inline-source-map',
    output: {
        // 所有的依赖都合并到bundle.js
        filename: 'bundle.js',
        // 输出文件都放到 dist文件夹下
        path: path.resolve(__dirname, './dist')
    },

    // style-loader 和css-loader
    module: {
        rules: [
            {
                // 正则表达式匹配css文件
                test: /\.css$/,
                // css-loader读取css文件 style-loader将读取到的css通过style标签注入到HTML的DOM中
                // use: ['style-loader','css-loader'],

                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 从.js文件中提取出来的 .css的文件的名称
            filename: '[name].css',
        }),
    ],
}