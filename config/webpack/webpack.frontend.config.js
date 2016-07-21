var path = require('path');
var webpack = require('webpack');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractLESS = new ExtractTextPlugin({filename:'[name].css',disable: false, allChunks: true});

function root(p) {
  return path.join(__dirname, p);
}

console.log(path.resolve(__dirname, "../../node_modules/fabalous-core"));

module.exports = {
  output: {
    path: path.join(__dirname,'../../dist/web/'),
    filename: 'bundle.js',
    chunkFilename: 'bundle-[chunkhash].js'
  },



  //devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.less'],
  },

  entry: {
    vendor: [
      'react', 'react-dom','react-router', 'history', 'material-ui', 'mobx'
    ],

    app: [
      'webpack-dev-server/client?http://localhost:8080/', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './src/A_Web.ts' // Your appʼs entry point
    ]
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
        exclude: /node_modules/
      },
      {
        //exclude: /node_modules/,
        include:[
            path.resolve(__dirname, "../../node_modules/fabalous-core"),
            path.resolve(__dirname, "../../src")
          ],
        test: /\.tsx?$/,
        loader: 'react-hot!babel?cache&presets[]=es2015!awesome-typescript-loader'
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

  plugins:[
    new ForkCheckerPlugin(),
    new webpack.DefinePlugin({
      CLIENT: true,
      SERVER:false,
      TEST:false
    }),
    new webpack.HotModuleReplacementPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 3,
      minChunkSize: 50000,
      filename: 'vendor.bundle.js'
    }),
    //new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NamedModulesPlugin()

    //extractLESS

   // new webpack.optimize.UglifyJsPlugin()
  ]
};