module.exports = {
  entry: "./",
  output: {
    path: path.resolve(__dirname, "dist"), // string
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
  plugins: [],
}