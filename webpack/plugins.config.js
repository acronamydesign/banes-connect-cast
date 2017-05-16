const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require("webpack")

const options = {
    livereload:{}
}

module.exports = [
    new LiveReloadPlugin(options.livereload),
    new webpack.LoaderOptionsPlugin({
        test: /\.styl$/,
        stylus: {
            default: {
                use: [],
            }
        },
    })
]