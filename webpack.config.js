const path = require('path');
const glob = require("glob");

let entry = __dirname + "/app/src/js/app.js";
let outputPath = __dirname + "/dist/";
if (process.env.TESTBUILD) {
    entry = glob.sync(__dirname + "/app/test/**/*.test.js");
    outputPath = __dirname + "/dist-test/";
}

module.exports = {
    entry: entry,
    output: {
        publicPath: "",
        path: outputPath
    },
    devtool: "source-map",
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './app'),
        open: true,
        compress: true,
        hot: true,
        host: '0.0.0.0',
        port: 8080,
    },
    plugins: [],
}
