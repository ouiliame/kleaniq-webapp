var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var config = require('./config');

new WebpackDevServer(webpack(webpackConfig), {
  contentBase: 'public/',
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true,
  inline: true,
  hot: true,
  proxy: {
      '/api/**': {
        target: 'http://0.0.0.0:'+config.backendPort+'/',
        secure: false
      }
  }
}).listen(config.devPort, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://0.0.0.0:'+config.devPort);
});
