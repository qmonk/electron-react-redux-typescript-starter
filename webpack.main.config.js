const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devtool: "source-map",
    entry: "./src/main/main.ts",
    target: "electron-main",
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
    node: {
        __dirname: false,
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
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
};
