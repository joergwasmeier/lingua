var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var path = require('path');

var frontendConfig = require("./../webpack/webpack.electron.config.js");

function onBuild(done) {
    return function(err, stats) {
        if(err)console.error('Error', err);
        else console.log(stats.toString());
        if(done) done();
    }
}

gulp.task('electron-watch', function() {
    new WebpackDevServer(webpack(frontendConfig), {
        publicPath: '/',
        contentBase: path.join(__dirname,'../../dist/electron/'),
        hot: true,
        quiet: false,
        noInfo: false,
        stats: {
            colors: true
        }
    }).listen(8080, "localhost", function(err) {
        if (err) console.error(err);
    });
});

gulp.task('electron-build', function(done) {
    var myConfig = frontendConfig;
    myConfig.debug = false;
    myConfig.devtool = null;
    myConfig.entry = {
        app: [
            './src/A_Electron.ts' // Your appʼs entry point
        ]
    };
    myConfig.plugins = [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify('production') },
            DEBUG: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),
        new webpack.BannerPlugin("Copyright 2016 - Jörg Wasmeier")
    ];

    webpack(myConfig).run(onBuild(done));

    // electron-packager ~/Projects/sound-machine SoundMachine --all --version=0.30.2 --out=~/Desktop --overwrite --icon=~/Projects/sound-machine/app/img/app-icon.icns
});
