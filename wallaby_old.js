var wallabyWebpack = require('wallaby-webpack');
var pp = require('preprocess');

var webpack = require('webpack');

var wallabyPostprocessor = wallabyWebpack({
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/\.(gif|png|less|css)$/, 'node-noop')
    ]
});


module.exports = function (wallaby) {
    //wallaby.defaults.files.load = false;
    //wallaby.defaults.tests.load = false;

    return {
        debug:true,

        files: [
            {pattern: 'src/**/*.ts*'},
            {pattern: 'src/**/*Spec.ts*', ignore:true}
        ],

        tests: [
            {pattern: 'src/**/*Spec.ts*'}
        ],

        preprocessors: {
            '**/*.js': function(file) {
                return require("babel-core").transform(file.content, {
                    sourceMap: true,
                    presets: ["es2015", "react"],
                    compact: false
                });
            }
        },

        compilers: {
            '**/*.ts?(x)': wallaby.compilers.typeScript({
                module: 'commonjs',
                jsx: 'React'
            })
        },

        postprocessor: wallabyPostprocessor,

        env: {
            type: 'node',
            runner: require('phantomjs2-ext').path,
            params: { runner: '--web-security=false' }
        },

        testFramework: 'jasmine',

        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    }
};