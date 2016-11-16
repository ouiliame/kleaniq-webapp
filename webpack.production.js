var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  devtool: 'cheap-module-source-map',

  entry: {
    app: './client/app/index.js',
    admin: './client/admin/index.js',
    static: './client/static/index.js'
  },

  output: {
    // app gets built to public/app folder, and is served on public/
    path: path.join(__dirname, 'public/'),
    filename: 'js/[name].js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot-loader/webpack', 'babel'],
        exclude: [/node_modules/, /semantic/]
      },

      {
        test: /\.json/,
        loader: 'json-loader'
      },

      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
        exclude: [/semantic/]
      },

      { // fonts
        test: /\.(png|woff2?|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },

      { // svg images
        test: /\.svg$/,
        loader: 'raw',
        include: [/images/]
      },

      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'node_modules/webworkify/index.js'),
        loader: 'worker'
      },

/*
      {
        test: /mapbox-gl.+\.js$/,
        loader: 'transform/cacheable?brfs'
      },

      {
        test: /react-map-gl-heatmap-overlay.+\.js/,
        loader: 'transform/cacheable?brfs'
      },

      {
        test: /webgl-heatmap.+\.js/,
        loader: 'transform/cacheable?brfs'
      }
*/
    ]
  },

  postcss: function () {
    return [
      require('precss'),
      require('postcss-utilities'),
      require('autoprefixer')
    ];
  },

  resolve: {
    root: [
      path.resolve('./client/lib'),
      path.resolve('./client/static'),
      path.resolve('./client/admin'),
      path.resolve('./client/app'),
      path.resolve('./client/vendor')
    ],
    alias: {
      'webworkify': 'webworkify-webpack',
      'mapbox-gl$': 'mapbox-gl/dist/mapbox-gl.js'
    }
  },


  plugins: [

    // DEFINITIONS & RESOLUTIONS

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    // OPTIMIZE

    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'js/commons.js',
      chunks: ['admin', 'static']
    }),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false,
    }),

    // GENERATE HTML

    new HtmlWebpackPlugin({
      filename: 'app/index.html',
      chunks: ['app'],
      inject: true,
      template: 'client/index.production.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'admin/index.html',
      chunks: ['commons', 'admin'],
      inject: true,
      template: 'client/index.production.html'
    }),

    // generate static page HTML (public/index.html)
    // all other pages should be reloaded via react-router

    new HtmlWebpackPlugin({
      chunks: ['commons', 'static'],
      inject: true,
      template: 'client/index.production.html'
    })
  ]
};

module.exports = config;
