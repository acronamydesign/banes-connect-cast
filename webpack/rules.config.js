

module.exports = [
     { test: /\.css$/, loader: "style-loader!css-loader" },
    {
        test: /\.styl$/,
        use: [
        'style-loader',
        'css-loader',
        {
          loader: 'stylus-loader',
          options: {
            use: [],
          },
        },
      ],
    },
    { test: /\.jpg$/,    loader: 'url-loader?limit=65000&mimetype=image/jpg&name=img/[name].[ext]' },
    { test: /\.jpeg$/,   loader: 'url-loader?limit=65000&mimetype=image/jpeg&name=img/[name].[ext]' },
    { test: /\.png$/,    loader: 'url-loader?limit=65000&mimetype=image/png&name=img/[name].[ext]' },
    { test: /\.gif$/,    loader: 'url-loader?limit=65000&mimetype=image/gif&name=img/[name].[ext]' },
    // fonts
    { test: /\.svg$/,    loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]' },
    { test: /\.woff$/,   loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
    { test: /\.woff2$/,  loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]' },
    { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
    { test: /\.eot$/,    loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' }
]