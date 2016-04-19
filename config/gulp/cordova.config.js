/**
 * Created by creativecode on 13.03.16.
 */

var create = require('gulp-cordova-create');
var plugin = require('gulp-cordova-plugin');
var android = require('gulp-cordova-build-android');
var gulp = require('gulp');
//var cordova = require('gulp-cordova');


//gulp.task('cordova:init', function() {
//  gulp.src('./cordova.json')
//    .pipe(cordova([]))
//});

var exec = require('child_process').exec;
var path = require('path')

var parentDir = path.resolve(process.cwd(), './dist/cordova/release/');
gulp.task('cordova', function (cb) {
  exec('cordova run android', {cwd: parentDir}, function (error, stdout, stderr) {
    // if you also want to change current process working directory:
    console.log(error);
    console.log(stdout);
    console.log(stderr);

    process.chdir(parentDir);
  });
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
