const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        mainFields: ["main", "module", "browser"],
    },
    entry: "./src/renderer/index.tsx",
    target: "electron-renderer",
    devtool: "source-map",
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
        contentBase: path.join(__dirname, "../dist/renderer"),
        historyApiFallback: true,
        compress: true,
        hot: true,
        port: 4000,
        publicPath: "/",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js",
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
            title: "electron-react-redux-typescript",
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
        }),
    ],
};
