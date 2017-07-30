var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, '/src'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module:{
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};