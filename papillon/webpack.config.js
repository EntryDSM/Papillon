const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["*", ".js", ".ts", ".tsx"],
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      api: path.resolve(__dirname, "src/data/api"),
      modules: path.resolve(__dirname, "src/data/modules"),
      components: path.resolve(__dirname, "src/components"),
      hooks: path.resolve(__dirname, "src/hooks"),
      page: path.resolve(__dirname, "src/page"),
      styles: path.resolve(__dirname, "src/styles")
    }
  },
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
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            name: "[name].[ext]?[hash]",
            publicPath: "/dist"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
