var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');

var config = {
    devtool: 'cheap-module-inline-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:' + (process.env.PORT || 3003),
        './src/index.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.[name].js',
        publicPath: '/public'

    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$|\.jsx$/,
            exclude: /node_modules/,
            loaders: ['babel'],
            include: path.resolve(__dirname, 'src')
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['public'], {
            root: __dirname
        }),
        new webpack.DefinePlugin({
            '__DEV__': true,
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]
};

module.exports = config;
