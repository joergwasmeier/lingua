var wallabyWebpack = require('wallaby-webpack');
var pp = require('preprocess');

var webpack = require('webpack');

var wallabyPostprocessor = wallabyWebpack({
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.less'],
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loader: 'babel?cacheDirectory=.awcache&presets[]=es2015!awesome-typescript-loader'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]',
                exclude: /node_modules/
            },
            {
                test: /\.html|json?$/,
                loader: 'url-loader?limit=1&name=[name].[ext]!preprocess?+WEB',
                exclude: /node_modules/
            }
        ]
    },

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
            {pattern: 'src/**/*.ts*', load:false},
            {pattern: 'src/**/*Spec.ts*', ignore:true}
        ],

        tests: [
            {pattern: 'src/**/*Spec.ts*'}
        ],

        postprocessor: wallabyPostprocessor,

        env: {
            runner: require('phantomjs2-ext').path,
            params: { runner: '--web-security=false' }
        },

        testFramework: 'jasmine',

        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    }
};