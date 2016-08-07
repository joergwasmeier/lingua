var path = require('path');
var webpack = require('webpack');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractLESS = new ExtractTextPlugin({filename:'[name].css',disable: false, allChunks: true});

function root(p) {
  return path.join(__dirname, p);
}

module.exports = {
  output: {
    path: path.join(__dirname,'../../dist/web/'),
    filename: 'bundle.js',
    /*chunkFilename: 'bundle-[chunkhash].js'*/
  },
  /*
  externals:{
    "react":"react",
    "react-router":"react-router",
    "react-dom":"react-dom",
    "material-ui":"material-ui",
    "moment":"moment",
    "mobx":"mobx",
    "chart.js":"chart.js",
    "history":"history",
    "mobx-react":"mobx-react"
  },
  */

  debug: true,
  noInfo: false,
  quiet: false,


  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.less'],
  },

  entry: {
    /*
    vendor: [
      'react', 'react-dom','react-router', 'history', 'material-ui', 'mobx'
    ],
    */

    app: [
      'react-hot-loader/patch',
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
        test: /\.tsx?$/,
        loader: 'babel?cacheDirectory=true!awesome-typescript-loader'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]',
        exclude: /node_modules/
      },
      { test: /\.json$/, loader: 'json'},
      {
        test: /index.html/,
        loader: 'url-loader?limit=1&name=[name].[ext]',
        exclude: /node_modules/
      }
    ]
  },

  plugins:[
    new ForkCheckerPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
      CLIENT: true,
      SERVER:false,
      TEST:false
    }),
    new webpack.HotModuleReplacementPlugin(),
    /*
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      minChunkSize: 50000,
      filename: 'vendor.bundle.js'
    }),
    */
    new webpack.NamedModulesPlugin()
  ]
};