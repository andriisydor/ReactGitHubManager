"use strict";

const webpack = require("webpack");
const path = require('path');

const WebpackNotifierPlugin = require('webpack-notifier');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
    srcPath: path.join(__dirname, 'src'),
    distPath: path.join(__dirname, 'dist'),
    staticSourcePath : path.join(__dirname, 'static'),
    stylesPath :  path.join(__dirname, 'styles')
};

module.exports = {
    //watch: true,
    cache: true,
    devtool: 'cheap-module-eval-source-map',
    context: paths.srcPath,

    entry: [
        "./app.jsx",
    ],

    output: {
        path: paths.distPath,
        filename: "bundle.js"
    },

    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options:{
                            presets: [
                                'react','es2015-webpack2'
                            ]
                        }
                    }
                ],
                //include: paths.srcPath
            },
            // {
            //     test: /\.scss$/,
            //     exclude: /node_modules/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: [
            //             { loader: 'css-loader', options: { minimize: true } },
            //             'postcss-loader',
            //             'sass-loader'
            //         ]
            //     })
            // },
            // {
            //     test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
            //     use: 'file-loader?name=assets/[name]-[hash].[ext]'
            // },
            // {
            //     test: /\.(png|gif|jpg|svg)$/,
            //     use: [
            //         'url-loader?limit=20480&name=assets/[name]-[hash].[ext]'
            //     ],
            //     include: paths.staticSourcePath
            // }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin()
    ],

    resolve: {
        extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.json'],
        modules: [
            paths.srcPath,
            //path.join(__dirname, 'node_modules'),
            'node_modules'
        ]
    },
};