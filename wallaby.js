var wallabyWebpack = require('wallaby-webpack');
var webpack = require('webpack');

var wallabyPostprocessor = wallabyWebpack({

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.less']
    },

    devtool: 'source-map',

    externals: {
        // Use external version of React instead of rebuilding it
        "react": "React"
    },

    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'noop-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loader: 'babel?cacheDirectory=.awcache&presets[]=es2015!awesome-typescript-loader'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'noop-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html|json?$/,
                loader: 'noop-loader',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.NormalModuleReplacementPlugin(/\.(gif|png|less|css)$/, 'node-noop'),
        new webpack.DefinePlugin({
            CLIENT: true,
            SERVER:false,
            TEST:true
        })
    ]
});


module.exports = function (wallaby) {
    //wallaby.defaults.files.load = false;
    //wallaby.defaults.tests.load = false;

    return {
        debug:true,

        files: [
            {pattern: 'src/**/*.ts*', load:false},
            {pattern: 'src/**/*Spec.ts*', ignore:true},
            {pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false}

        ],

        tests: [
            {pattern: './src/**/*Spec.ts*', load:false}
        ],

        /*
        env: {
            runner: require('phantomjs2-ext').path,
            params: { runner: '--web-security=false' }
        },
        */

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
            '**/*.js*': wallaby.compilers.babel()
        },

        postprocessor: wallabyPostprocessor,


        //testFramework: 'jasmine',

        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    }
};