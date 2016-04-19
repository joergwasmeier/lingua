var gulp = require('gulp');
var mocha = require('gulp-mocha');
require("./config/gulp/gulp.config.js");

gulp.task('default', ['backend-watch','frontend-watch']);

gulp.task('watch', ['backend-watch','frontend-watch']);
gulp.task('build', ['frontend-build', 'backend-build']);
gulp.task('tdd', ['testNode', 'testKarma']);
gulp.task('test-all', ['testNode', 'testKarma']);

gulp.task('complete', ['backend-watch','frontend-watch', 'testNode', 'testKarma']);

var runSequence = require('run-sequence');

//gulp.task('electron-watch', ['testKarma']);
gulp.task('electron-build', function(){
  runSequence('electron-app-build', 'electron-pack')
});


gulp.task('cordova-build', function(){
  runSequence('cordova-app-build', 'cordova-copy', 'cordova-android')
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