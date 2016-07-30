var gulp = require('gulp');
var webpack = require('webpack');
var path = require('path');

var Server = require('karma').Server;
gulp.task('testKarma', function(done) {
    new Server({
        configFile: __dirname + '/../karma/karma.conf.js'
    }, done).start();
});

gulp.task('testKarma-tdd', function(done) {
    new Server({
        configFile: __dirname + '/../karma/karma-tdd.conf.js'
    }, done).start();
});