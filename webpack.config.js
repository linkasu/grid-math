const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.tsx"],
    resolve: {
        extensions: [".tsx",".ts",".js"],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[hash].js"
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpeg|jpg|png|svg)$/,
                use: ["file-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [{
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                  }
                },"ts-loader"]
            }
        ]
    }
}