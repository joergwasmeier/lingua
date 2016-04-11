var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');
var webpack = require('webpack');


var frontendConfig = require("./../webpack/webpack.frontend-test.config.js");

gulp.task('testComp', function(done) {
    webpack(frontendConfig, function(e, r){
        done();
    });
});

gulp.task('testJasmine', function() {
    console.log("testJasmine");
    return gulp.src('./dist/test/test.js')
        .pipe(jasmine());
});

gulp.task('testNode', function() {
    //watch('**/*.ts', function(files) {
    //    runSequence( 'testComp', 'testJasmine' );
    //});

    runSequence( 'testComp', 'testJasmine' );
});