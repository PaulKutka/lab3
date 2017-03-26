var express   = require('express');
var app       = express();


const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);


compiler.watch({
    aggregateTimeout: 300,
    poll: true
}, (error, stats) => {
    if (error) {
        return console.error(error);
    }
    console.log(stats.toString({
        chunks: false,
        colors: true
    }));
});


//var staticResource = require('/home/paulius/Projects/lab3/frontend');
//app.use('./frontend');
app.use('/', express.static('frontend'));





app.listen(3006, function() {
  console.log('Application is listening on port 3006');
});

