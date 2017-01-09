var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var isDevelopment = process.env.NODE_ENV === 'development';
console.log(process.env.NODE_ENV)

var configs = {
    entry: path.resolve(__dirname, 'src/app/app.js'),

    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader')
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
        }, {
            test: /\.html$/,
            loader: 'raw',
            exclude: /node_modules/
        }]
    },

    watch: isDevelopment,

    watchOptions: {
        aggregateTimeout: 100
    },

    postcss: [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ],

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery'
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),

        new ExtractTextPlugin('bundle.css', {
            disable: isDevelopment
        })
    ]
};

if (!isDevelopment) {
    configs.plugins.push(
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            compress: { warnings: false },
            sourceMap: false
        })
    )
}

module.exports = configs;
