const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    module:{
        rules: [
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'pug-html-loader',
                    },
                ],
            },
            {
                test: /\.(ttf|woff|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                          },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass'),
                        },
                    },
                ],
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
             filename: 'index.html',
             template:'./src/pages/colors-and-types/colors-and-types.pug',
        }),
        new HtmlWebpackPlugin({
             filename: 'form-elements.html',
             template:'./src/pages/form-elements/form-elements.pug',
        }),
    ],
};