const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')


module.exports = {
    context: path.resolve(__dirname, '#src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: __dirname + '/dist',
        },
        port: 4500
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, '#src/favicon.ico'),
                to: path.resolve(__dirname, 'dist')
            }, ]
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.[hash].css'
        }),
    ],
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, '#src'),
            '@core': path.resolve(__dirname, '#src/core')
        }
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(s[ac]ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    }
}