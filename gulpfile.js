var gulp = require('gulp');
var mocha = require('gulp-mocha');
require("./config/gulp/gulp.config.js");

gulp.task('default', ['backend-watch','frontend-watch']);

gulp.task('watch', ['backend-watch','frontend-watch']);
gulp.task('build', ['frontend-build', 'backend-build']);
gulp.task('tdd', ['testNode', 'testKarma']);
gulp.task('test-all', function(){runSequence('testNode', 'testKarma', 'testPhantomCss')});

gulp.task('complete', ['backend-watch','frontend-watch', 'testNode', 'testKarma']);

var runSequence = require('run-sequence');

//gulp.task('electron-watch', ['testKarma']);
gulp.task('electron-build', function(){
  runSequence('electron-app-build', 'electron-pack')
});


gulp.task('cordova-build', function(){
  runSequence('cordova-app-build', 'cordova-copy', 'cordova-android')
});

var casperJs = require('gulp-casperjs');

/*
gulp.task('testPhantomCss', function(){
    gulp.src('demo/testsuite.js')
        .pipe(casperJs({command:'test'})); //run casperjs test

});

*/

var spawn = require('child_process').spawn,
    gutil = require('gulp-util');

gulp.task('testPhantomCss', function () {
    var tests = ['demo/testsuite.js'];

    var casperChild = spawn('casperjs', ['test'].concat(tests));

    casperChild.stdout.on('data', function (data) {
        gutil.log('CasperJS:', data.toString().slice(0, -1)); // Remove \n
    });

    casperChild.on('close', function (code) {
        var success = code === 0; // Will be 1 in the event of failure

        // Do something with success here
    });
});


gulp.task('testmocha', function() {
    return gulp.src('test.js')
        .pipe(mocha())
        .once('error', function() {
            process.exit(1);
        })
        .once('end', function() {
            process.exit();
        });
});

