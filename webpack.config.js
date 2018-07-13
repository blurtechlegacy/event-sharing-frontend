const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const publicPath = "/";

const plugins =
    process.env.NODE_ENV === "production"
        ? [
            new webpack.optimize.UglifyJsPlugin({
                compress: {warnings: false}
            })
        ]
        : [];

module.exports = {
    // ...

    devtool: process.env.NODE_ENV !== "production" ? "source-map" : false,

    entry: [
        require.resolve("babel-polyfill"),
        path.resolve(__dirname, "src", "index.js")
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name]-[hash].js",
        publicPath
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["react", "stage-0"],
                        cacheDirectory: true,
                        plugins: ["transform-object-rest-spread"]
                    }
                }
            },

            /*{
                oneOf: [{test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'},
                    {
                        test: /\.(jpg|png|svg)$/,
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[hash].[ext]',
                        }
                    },
                ]
            },*/
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "build"),
        watchOptions: {
            ignored: /node_modules/
        },
        hot: false,
        host: "127.0.0.1",
        port: "8080",
        historyApiFallback: true
    },
    plugins: [
        // ...
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve("src", "index.html")
        }),
        new ExtractTextPlugin({
            filename: "style.[hash].css",
            allChunks: true
        }),
        ...plugins
    ]
};


