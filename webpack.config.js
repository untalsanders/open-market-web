'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => ({
    mode: argv.mode || 'production',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: [path.resolve(__dirname, 'src', 'assets')],
        compress: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: argv.mode === 'production' ? '/products-api-site' : '',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src', 'assets'),
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@pages': path.resolve(__dirname, 'src', 'pages'),
            '@styles': path.resolve(__dirname, 'src', 'styles'),
        },
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic',
                                },
                            ],
                        ],
                    },
                },
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
    ],
})
