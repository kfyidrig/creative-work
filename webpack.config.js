const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //开发模式
    mode: "development",

    //入口文件
    entry: {
        "index": "./src/router.js"
    },

    //输出文件
    output: {
        filename: "[name].js"
    },

    //webpack的loader
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                type: "asset",
            },
        ]
    },

    //插件
    plugins: [new HtmlWebpackPlugin({
        title: "CREATIVE WORK",
        meta: {
            description:'请开始你的创作吧',
            viewport:'width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0'
        },
        // favicon: "./assets/favicon.ico"
    })],

    //webpack开发服务器
    devServer: {
        contentBase: path.join(__dirname, '/assets'),
        // contentBasePublicPath: '/api',
        port: 9000,
        historyApiFallback:true,
        //反向代理
        proxy:{
            '/api':{
                // target: 'https://www.baidu.com'
            }
        }
    },

    //用于映射真实代码
    devtool: 'eval-cheap-module-source-map',
};