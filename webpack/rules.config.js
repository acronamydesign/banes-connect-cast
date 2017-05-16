

module.exports = [
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
    }
]