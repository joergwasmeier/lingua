/**
 * Created by creativecode on 13.03.16.
 */

var create = require('gulp-cordova-create');
var plugin = require('gulp-cordova-plugin');
var android = require('gulp-cordova-build-android');
var gulp = require('gulp');

var exec = require('child_process').exec;
var path = require('path');

var util  = require('util');
var spawn = require('child_process').spawn;
var parentDir = path.resolve(process.cwd(), './dist/cordova/release/');
var frontendConfig = require("./../webpack/webpack.cordova.config.js");

var webpack = require('webpack');
var exec = require('gulp-exec');
var electron = require('gulp-electron');


gulp.task('cordova-app-build', function(done) {
  var myConfig = frontendConfig;
  myConfig.debug = false;
  myConfig.devtool = null;
  myConfig.entry = {
    app: [
      './src/A_Cordova.ts'
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
});

function onBuild(done) {
  return function(err, stats) {
    if(err)console.error('Error', err);
    else console.log(stats.toString());


    if(done) done();
  }
}

gulp.task('cordova-android', function (cb) {
  exec('cordova run android', {cwd: parentDir}, function (error, stdout, stderr) {
    // if you also want to change current process working directory:
    console.log(error);
    console.log(stdout);
    console.log(stderr);

    process.chdir(parentDir);
  });
});

gulp.task('cordova-copy', function() {
  return gulp.src("./dist/cordova/app/**", {base: './dist/cordova/app/'})
    .pipe(gulp.dest("./dist/cordova/release/www/"));

});
gulp.task('cordova2',function(){
    return gulp.src("./dist/cordova/release/",{ cwd: './dist/cordova/release/' })
      .pipe(exec("cordova run android"));
/*
    var options = {
      dir: './dist/cordova/release/',
      id: 'com.myproject.hello',
      name: 'MyProject'
    };

    return gulp.src('./dist/cordova/app/')
        .pipe(create(options))
        .pipe(plugin('org.apache.cordova.dialogs'))
        .pipe(plugin('org.apache.cordova.camera'))
        .pipe(android())
        .pipe(gulp.dest('apk'));
*/
});
