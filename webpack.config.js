//
// module.exports = {
//     entry: [
//         './src/app.js',
//     ],
//     output: {
//         filename: './js/bundle.js'
//     },
//     devtool: "source-map",
//     module: {
//         rules: [{
//             test: /\.js$/,
//             include: path.resolve(__dirname, 'src/js'),
//             use: {
//                 loader: 'babel-loader',
//                 options: {
//                     presets: 'env'
//                 }
//             }
//         },
//         ]
//     },
//     plugins: [
//     ]
// };

const webpack = require('webpack')
const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './src'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [

        new webpack.HotModuleReplacementPlugin(),
    ],
}
