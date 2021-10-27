const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
    target: "electron-renderer",
    entry: "./src/renderer/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js",
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    plugins: ["@babel/plugin-transform-runtime"],
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "../dist/renderer"),
        },
        historyApiFallback: true,
        compress: true,
        hot: true,
        port: 4000,
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configOverwrite: {
                    include: ["src/renderer/**/*"],
                },
            },
        }),
        new HtmlWebpackPlugin({
            title: "electron-react-redux-typescript-starter",
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
        }),
    ],
});
