var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var port = process.env.PORT || 3003;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at http://localhost:' + port);
});
