const express = require('express');
const app = express();
const http = require('http').Server(app);
const render = require('./render');
const fs = require('fs');
const Socket = require('simple-socketio/server');
const config = require('../webpack.config');

let chunks = [];
const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  const webpack = require('webpack');
  const webpackDevMiddleWare = require('webpack-dev-middleware');
  const webpackHotMiddleWare = require('webpack-hot-middleware');
  const compiler = webpack(config);
  app.use(webpackDevMiddleWare(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    serverSideRender: true,
    aggregateTimeout: 300,
    poll: true,
    stats: {
      chunks: false
    }
  }));
  app.use(webpackHotMiddleWare(compiler));
} else {
  chunks = JSON.parse(fs.readFileSync(config.output.path + '/chunkNames.json')).assetsByChunkName;
}

app.use(express.static(config.output.path));

app.get('/**', function (req, res) {
  isDev && (chunks = res.locals.webpackStats.toJson().assetsByChunkName || {});
  res.send(render(req, chunks));
});

http.listen(3838, function () {
  console.log('listening on http://localhost:3838/');
});

Socket(http);
