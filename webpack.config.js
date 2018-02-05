const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: '#source-map',
    entry: ['./styles/main.css'],
    output: {
        path: path.resolve(__dirname, 'styles'),
        filename: 'bundle.css'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                        }, {
                            loader: 'postcss-loader'
                        }
                    ]
                })
            },
            {
                test: /\.(ttf|eot|woff2?|png|jpe?g|gif|svg|ico)$/,
                include: __dirname,
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: `../[path][name].[ext]`,
                },
            },
            {
                test: /\.(ttf|eot|woff2?|png|jpe?g|gif|svg|ico)$/,
                include: /node_modules|bower_components/,
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    outputPath: 'vendor/',
                    name: `[name].[ext]`,
                },
            }
        ]
    },
    devServer: {
        open: true,
        contentBase: path.join(__dirname),
        publicPath: "/",
        compress: true,
        port: 8080,
        hot: true,
        inline: true
    },
    plugins: [new ExtractTextPlugin({filename: `bundle.css`, allChunks: true})]
};
