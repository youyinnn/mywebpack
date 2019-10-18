const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 这个插件需要用命名空间来声明
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // Javascript执行文件的入口
    entry: {
        main: './src/js/main.js',
        minor: './src/js/minor.js'
    },
    output: {
        // 所有的依赖都合并到bundle.js
        // filename: 'bundle.js',
        // 根据入口节点动态生成bundle
        filename: './js/[name].bundle.js',
        // 输出文件都放到 dist文件夹下
        path: path.resolve(__dirname, 'dist')
    },

    // style-loader 和css-loader
    module: {
        rules: [{
                // 正则表达式匹配css文件
                test: /\.css$/i,
                // css-loader读取css文件 style-loader将读取到的css通过style标签注入到HTML的DOM中
                // use: ['style-loader','css-loader'],

                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // 解决提取出来的css中的url引用路径不对的问题
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'img'
                }
            }
        ]
    },
    plugins: [
        // 清理掉上次webpack输出的内容
        new CleanWebpackPlugin(),
        // 通过模板输出html5页面 可配合webpack-dev-server进行热开发
        new HtmlWebpackPlugin({
            // 以index为模板 输出一个h5文件 这个文件整合了所有的output
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            // 从.js文件中提取出来 然后输出到dist的.css的文件的名称
            filename: './css/[name].css',
        }),
    ],
}