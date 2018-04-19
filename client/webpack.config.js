var webpack = require("webpack");
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, '../src/main/resources/static');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: {
        client: APP_DIR + '/client.js',
        server: APP_DIR + '/server.js'
    },
    output: {
        path: BUILD_DIR,
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: APP_DIR + '/index.html',
            excludeChunks: ['server']
        })
    ]
};

module.exports = config;