const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const base = require("./webpack.config.base.js")

module.exports = {
    ...base,
    mode: "development",
    plugins: [new HtmlWebpackPlugin({
        title: 'dswang',
        template: 'src/assets/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
