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
    alias: {
      node_modules:path.resolve("./node_modules"),
      "@scripts":path.resolve("./public/src/scripts"),
      "@styles":path.resolve("./public/src/styles"),
    },
  },
  devtool: "source-map", // enum
  context: __dirname,
  target: "web",
  plugins: require("./webpack/plugins.config"),
}