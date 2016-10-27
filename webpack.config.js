var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin  = require('html-webpack-plugin');

function makeEntry(entries) {
  var devServerEntries = [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server'
  ];

  return devServerEntries.concat(entries);
}

var config = {
  devtool: 'eval',

  entry: {
    app: makeEntry('./client/app/index.js'),
    admin: makeEntry('./client/admin/index.js'),
    static: makeEntry('./client/static/index.js')
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
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ],
        include: [/semantic/]
      },

      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
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
      }
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
      path.resolve('./client/static')
    ],
    alias: {
      'kleaniq-semantic-ui-css': path.resolve('./semantic/dist/semantic.min.css'),
      'kleaniq-semantic-ui-js': path.resolve('./semantic/dist/semantic.min.js'),
    }
  },


  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      filename: 'app/index.html',
      chunks: ['app'],
      inject: true,
      template: 'client/app/index.template.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'admin/index.html',
      chunks: ['admin'],
      inject: true,
      template: 'client/admin/index.template.html'
    }),

    // generate static page HTML (public/index.html)
    // all other pages should be reloaded via react-router

    new HtmlWebpackPlugin({
      chunks: ['static'],
      inject: true,
      template: 'client/static/index.template.html'
    })
  ]
};

module.exports = config;
