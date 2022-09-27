'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: './src/app.js',
    devtool: 'inline-source-map',
    devServer: {
        static: process.env.OUTPUT_DIR || './docs',
    },
    output: {
        path: path.resolve(__dirname, process.env.OUTPUT_DIR || 'docs'),
        clean: true,
    },
    module: {
        rules: [
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
