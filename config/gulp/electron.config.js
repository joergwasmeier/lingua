var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var path = require('path');
var exec = require('gulp-exec');
var electron = require('gulp-electron');
var packageJson = require('./../electron/package.json');
var frontendConfig = require("./../webpack/webpack.electron.config.js");
var clean = require('gulp-clean');



gulp.task('electron-watch', function() {
    new WebpackDevServer(webpack(frontendConfig), {
        publicPath: '/',
        contentBase: path.join(__dirname,'../../dist/electron/app/'),
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

gulp.task('electron-app-build', function(done) {
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
    gulp.src('./dist/electron/release/', {read: false}).pipe(clean());

    // electron-packager ~/Projects/sound-machine SoundMachine --all --version=0.30.2 --out=~/Desktop --overwrite --icon=~/Projects/sound-machine/app/img/app-icon.icns
});


gulp.task('electron-pack', function(done) {
  console.log("Copy package.json");


  gulp.src("./config/electron/package.json", {base: './config/electron/'})
    .pipe(gulp.dest("./dist/electron/app/"));

  gulp.src("")
    .pipe(electron({
    src: './dist/electron/app',
    packageJson: packageJson,
    release: './dist/electron/release',
    cache: './dist/electron/cache',
    version: 'v0.37.6',
    packaging: false,
    token: 'da809a6077bb1b0aa7c5623f7b2d5f1fec2faae4',
    platforms: ['win32-ia32'],
    platformResources: {
    }
  }))
    .pipe(gulp.dest("./dist/electron/build/"));

});

function onBuild(done) {
  return function(err, stats) {
    if(err)console.error('Error', err);
    else console.log(stats.toString());
    

    if(done) done();
  }
}