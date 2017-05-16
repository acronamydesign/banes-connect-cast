const path = require("path")

module.exports = {
  entry: "./public/webpack.index.js",
  output: {
    path: path.resolve("./public/app"), // string
    filename: "connect-cast.js",
  },
  module: {
    rules: require("./webpack/rules.config"),
  },
  resolve: {
    modules: [
      "node_modules",
    ],
    extensions: [".js", ".json", ".jsx", ".css"],
    alias: {},
  },
  devtool: "source-map", // enum
  context: __dirname,
  target: "web",
  plugins: require("./webpack/plugins.config"),
}