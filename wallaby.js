var wallabyWebpack = require('wallaby-webpack');
var pp = require('preprocess');

var webpack = require('webpack');

var wallabyPostprocessor = wallabyWebpack({
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/\.(gif|png|less|css)$/, 'node-noop')
    ]
});


module.exports = function (wallaby) {
    wallaby.defaults.files.load = false;
    wallaby.defaults.tests.load = false;

    return {
        files: [
            {pattern: 'src/**/*.ts*'},
            {pattern: 'node_modules/faba**/**/*.ts*'}
        ],

        tests: [
            {pattern: 'src/**/*Spec.ts'},
            {pattern: 'src/**/*Spec.tsx'}
        ],

        preprocessors: {

            'src/**/*.ts': function(file) {
                return pp.preprocess(file.content, {CLIENT:true}, {type: 'ts'});
            },
            'node_modules/faba**/**/*.ts': function(file) {
                return pp.preprocess(file.content, {CLIENT:true}, {type: 'ts'});
            }
        },

        postprocessor: wallabyPostprocessor,

        env: {
            runner: require('phantomjs2-ext').path,
            params: { runner: '--web-security=false' }
        },
        debug:true,
        testFramework: 'jasmine',
        delays: {
            edit: 500,
            run: 150
        },
        setup: function () {
            window.__moduleBundler.loadTests();
        }
    }
};