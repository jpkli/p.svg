const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        "psvg": "./index.js",
        "psvg-test": "./test/test-psvg.js"
    },
    devtool: "source-map",
    resolve: {
        modules: [path.resolve(__dirname, '../..'), '../node_modules']
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    devServer: {
        compress: true,
        publicPath: '/dist/',
        clientLogLevel: "none",
        historyApiFallback: true,
    },
    // plugins: [
    //     new UglifyJsPlugin({
    //         include: /\.min\.js$/,
    //         sourceMap: true
    //     })
    // ]
};
