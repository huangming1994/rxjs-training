const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8081',
    './index.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    publicPath: '/public',
  },
  devServer: {
    contentBase: './',
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8081' })
  ]
}