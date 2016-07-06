var path = require('path');
var webpack = require('webpack');

module.exports = {
    output: {
        path: path.join(__dirname,'../../dist/test/'),
        filename: 'test.js'
    },

    debug: false,
    devtool: 'source-map',

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.less']
    },
    entry: {
        app: [
            './test/T_Web.ts' // Your appʼs entry point
        ]
    },

    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },


    module: {
        loaders: [
            {   test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {   test: /\.tsx?$/,
                loader: 'ts-loader!preprocess?+CLIENT,+WEB,+TEST'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=5000&name=assets/[name]-[hash].[ext]'
            },
            {
                test: /\.html|json?$/,
                loader: 'url-loader?limit=1&name=[name].[ext]!preprocess?+WEB'
            }
        ]
    }
};