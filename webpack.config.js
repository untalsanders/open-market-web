'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config()
}

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: './src/app.js',
    devtool: 'inline-source-map',
    devServer: {
        static: process.env.OUTPUT_DIR || './dist',
    },
    output: {
        path: path.resolve(__dirname, process.env.OUTPUT_DIR || 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Example Static Website',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
            },
            template: './src/index.html',
            inject: 'body',
        }),
    ],
}
