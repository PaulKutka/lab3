const webpack = require('webpack');
const webpackConfig = require('./../../webpack.config.js');
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