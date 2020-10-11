const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = env => {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: {
            loader: "html-loader"
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, "/dist"),
      hot: true
    },
    output: {
      // filename: '[name].[contenthash:8].js',
      path: path.resolve(__dirname, "./dist"),
      filename: "main.js"
    },

    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new webpack.DefinePlugin({
        "process.env.BASE_URL": JSON.stringify(
          env.NODE_ENV === "production" ? "/geektrust-findfalcone" : ""
        )
      })
    ]
  };
};
