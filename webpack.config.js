const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        // filename: 'main.js',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'dswang',
        template:  'src/assets/index.html'
    })],
};