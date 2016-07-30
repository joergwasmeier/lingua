var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var glob = require("glob");
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

var nodeModules = fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    });

module.exports = {
    entry: glob.sync("./**/*Spec.ts"),

    target:'node',
    debug: true,
    output: {
        path: path.join(__dirname, '../../dist/test/node/'),
        filename: 'test.js'
    },
    node: {
        __dirname: true,
        __filename: true
    },
    devtool: 'eval',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    quiet: true,
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/},
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader'}
        ]
    },
    plugins:[
        new ForkCheckerPlugin(),
        new webpack.NormalModuleReplacementPlugin(/\.(gif|png|less|css)$/, 'node-noop'),
        new webpack.DefinePlugin({
            CLIENT: false,
            SERVER:true,
            TEST:true
        })
    ]
};