const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/, //file belakangnya ada jsx | js ($ menenentukan arah pencarian)
            exclude: /node_modules/, //
            use: {
                loader: "babel-loader"
            }
        }],

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.css',
            '.scss'
        ]
    }
};
