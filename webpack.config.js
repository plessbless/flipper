const webpack = require('webpack')
const path = require('path');

module.exports = {
        entry: [
        './src/app.js',
    ],
    output: {
        filename: './src/index.js'
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './src'),
        open: true,
        compress: true,
        hot: true,
        host: '0.0.0.0',
        port: 8080,
    },
    plugins: [

        new webpack.HotModuleReplacementPlugin(),
    ],
}
