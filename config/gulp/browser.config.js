var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var path = require('path');

var frontendConfig = require("./../webpack/webpack.frontend.config.js");
var CompressionPlugin = require('compression-webpack-plugin');
var OfflinePlugin = require('offline-plugin');


function onBuild(done) {
    return function(err, stats) {
        if(err)console.error('Error', err);
        else console.log(stats.toString());
        if(done) done();
    }
}

gulp.task('frontend-watch', function() {
    new WebpackDevServer(webpack(frontendConfig), {
        publicPath: '/',
        contentBase: path.join(__dirname,'../../dist/web/'),
        hot: true,
        progress: false,
        debug: false,
        stats: true

    }).listen(8080, "localhost", function(err) {
        if (err) console.error(err);
    });
});

gulp.task('frontend-build', function(done) {
    var myConfig = frontendConfig;
    myConfig.debug = false;
    myConfig.devtool = null;

    myConfig.entry = {
            vendor: [
                'react', 'react-dom','react-router','history','material-ui'
            ],
            app: [
                './src/A_Web.ts' // Your appʼs entry point
            ]
        };

    myConfig.module = {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loader: 'react-hot!babel?presets[]=es2015!awesome-typescript-loader'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=5000&name=assets/[name]-[hash].[ext]',
                exclude: /node_modules/
            },
            {
                test: /\.html|json?$/,
                loader: 'url-loader?limit=1&name=[name].[ext]!preprocess?+WEB',
                exclude: /node_modules/
            }
        ]
    },

    myConfig.plugins = [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') },
            DEBUG: false,
            CLIENT: true,
            SERVER:false,
            TEST:false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.bundle.js'
        }),
        new OfflinePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),
        new webpack.BannerPlugin("Copyright 2016 - Jörg Wasmeier"),
        new CompressionPlugin()
    ];

    webpack(myConfig).run(onBuild(done));
});
