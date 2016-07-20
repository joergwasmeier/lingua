var path = require('path');
var webpack = require('webpack');

function root(p) {
  return path.join(__dirname, p);
}

module.exports = {
  output: {
    path: path.join(__dirname,'../../dist/web/'),
    filename: 'bundle.js',
    chunkFilename: 'bundle-[chunkhash].js'
  },

  debug: false,
  devtool: 'source-map',

  resolve: {
    modules:[
      'node_modules'
    ],
    root: root('app'),
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.less'],
    root: [
        path.join(__dirname, 'node_modules')
    ]
  },
  entry: {
    vendor: [
      'react', 'react-dom','react-router','history','material-ui'
    ],

    app: [
      'webpack-dev-server/client?http://localhost:8080/', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './src/A_Web.ts' // Your appʼs entry point
    ]
  },
  module: {
    loaders: [
      {   test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {   test: /\.ts?$/,
        loader: 'react-hot!awesome-typescript-loader'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=5000&name=assets/[name]-[hash].[ext]'
      },
      {
        test: /\.html|json?$/,
        loader: 'url-loader?limit=1&name=[name].[ext]!preprocess?+WEB'
      }
    ]
  },

  plugins:[
    new webpack.DefinePlugin({
      VERSION: JSON.stringify("5fa3b9"),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: "1+1",
      "typeof window": JSON.stringify("object")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    })
  ]
};