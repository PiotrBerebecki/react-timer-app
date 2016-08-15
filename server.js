// express server

var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up at: localhost:' + PORT);
});


// webpack-dev-server on port 3001 for hot loading
// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config.js');
// const PORT_WEBPACK = 3001;
 
// new WebpackDevServer(webpack(config), {
//   hot: true,
//   historyApiFallback: true,
//   proxy: {
//     '*': 'http://localhost:3000'
//   }
// }).listen(PORT_WEBPACK, 'localhost', function (err, result) {
//   if (err) {
//     console.log(err);
//   }

//   console.log('Hot loading is up at: localhost:' + PORT_WEBPACK);
// });
