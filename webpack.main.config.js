const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
    entry: "./src/main/main.ts",
    target: "electron-main",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
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
    plugins: [
        new webpack.ProgressPlugin(),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configOverwrite: {
                    include: ["src/main/**/*"],
                },
            },
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
        }),
    ],
});
