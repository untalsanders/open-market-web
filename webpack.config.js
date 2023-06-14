'use strict'

const { DefinePlugin } = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => ({
    mode: argv.mode || 'production',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: env.production ? '/products-api-site' : '',
    },
    devServer: {
        static: [path.resolve(__dirname, 'src', 'assets')],
        compress: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src', 'assets'),
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@pages': path.resolve(__dirname, 'src', 'pages'),
            '@styles': path.resolve(__dirname, 'src', 'styles'),
        },
        extensions: ['*', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(?:js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            scriptLoading: 'defer',
            title: 'Products-API Site',
            template: './public/index.html',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'images/**/*.{png,jpg}',
                    to: path.resolve(__dirname, 'dist'),
                    context: path.resolve(__dirname, 'static'),
                },
            ],
        }),
        new DefinePlugin({
            BASE_URL: env.production ? JSON.stringify('/products-api-site') : JSON.stringify(''),
        }),
    ],
})
