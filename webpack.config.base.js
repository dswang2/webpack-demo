const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./dist"
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        runtimeChunk: 'single',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'dswang',
        template: 'src/assets/index.html'
    })],
    module: {
        rules: [{
            test: /\.scss$/i,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("dart-sass"),
                    },
                }
            ],
        }, {
            test: /\.less$/i,
            use: [
                "style-loader",
                "css-loader",
                "less-loader",
            ],
        },{
            test: /\.styl$/i,
            use: [
                "style-loader",
                "css-loader",
                "stylus-loader",
            ],
        }],
    },
};
