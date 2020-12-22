"use strict";

module.exports = {
    mode: "development",
    node: {
        __dirname: false,
        __filename: false,
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".json"],
    },
    devtool: "source-map",
    plugins: [],
};
