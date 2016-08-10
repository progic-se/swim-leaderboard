'use strict';

var path = require('path');
var express = require('express');

var config = require('./config');

var app = express();

if (config.WEB_APP_HOSTING == 'dev') {
  // Hot reloading in dev
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.disable('etag');
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './src/index.html'));
  });
} else {

  // Serv webapp statically from dist
  app.use(express.static('dist'));

}

var port = process.env.PORT || 3000;

app.listen(port, process.env.IP || "0.0.0.0");

console.log("Server started and listening to port: " + port);
