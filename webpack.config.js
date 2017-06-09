const path = require("path")

module.exports = function(env){

  return {
    entry: "./public/webpack.index.js",
    output: {
      path: path.resolve("./public/app"), // string
      filename: "connect-cast.js",
    },
    module: {
      rules: require("./webpack/rules.config"),
      noParse:[ /socket.io-client/ ]
    },
    externals:{
      'socket.io-client':'window.io'
    },
    resolve: {
      modules: [
        "node_modules",
      ],
      extensions: [".js", ".json", ".jsx", ".css"],
      alias: {
        "socket.io-client": path.join( __dirname, 'node_modules', 'socket.io-client', 'dist', 'socket.io.js' ),
        "node_modules":path.resolve("./node_modules"),
        "@scripts":path.resolve("./public/src/scripts"),
        "@styles":path.resolve("./public/src/styles"),
      },
    },
    devtool: "source-map", // enum
    context: __dirname,
    target: "web",
    plugins: require("./webpack/plugins.config")(env),
  }
}