var gulp = require('gulp');

__workDir = __dirname;
__devTool = 'source-map';
var Server = require('karma').Server;

require('@fabalous/core/config/gulp/core.config')(gulp);
require('@fabalous/runtime-web/config/gulp/RuntimeWeb.config')(gulp);
//require('@fabalous/test-karma/config/gulp/TestKarma.config.js')(gulp);

gulp.task('develop', ['backend-watch', 'runtime-web-watch']);
gulp.task('build', ['backend-build', 'runtime-web-build']);

gulp.task('testKarma', function(done) {
    new Server({
        configFile: __workDir+"/node_modules/@fabalous/test-karma/karma.conf.js"
    }, done).start();
});

gulp.task('t', function(done) {
    new Server({
        configFile: __workDir+"/karma-coverage.conf.js"
    }, done).start();
});
var jest = require('jest-cli');
var jestConfig = {
    "globals": {
        "__TS_CONFIG__": "tsconfig_jest.json",
        "CLIENT": true,
        "SERVER": false,
        "TEST": false
    },
    "transform": {
        ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": ".*\\Spec.(ts|tsx|js)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ]
};

gulp.task('test', function(done) {
    jest.runCLI({ config : jestConfig }, ".", function() {
        done();
    });
});

gulp.task('tdd', function(done) {
    gulp.watch([ "src/**/*.ts", "src/**/*.tsx" ], [ 'test' ]);
});
