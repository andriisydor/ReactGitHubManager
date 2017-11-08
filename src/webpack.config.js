"use strict";

var WebpackNotifierPlugin = require('webpack-notifier');
var path = require('path');
var webpack = require("webpack");
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'Scripts');

var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.app = paths.webroot + "js/app/app.jsx";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";
paths.concatJsxDest = paths.webroot + "dist/bundle.js";

module.exports = {
    entry: paths.app,
    output: {
        filename: paths.concatJsxDest
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"' + process.env.NODE_ENV + '"'
            }
        })
    ],
    resolve: {
        alias: {
            'react': path.join(__dirname, 'node_modules', 'react'),
            'redux': path.join(__dirname, 'node_modules', 'redux')
        },
        extensions: ['', '.js', '.jsx']
    }
};