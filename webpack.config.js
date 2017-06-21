const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/components/index.js',
  ],
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader', 'eslint-loader']
    },
  ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    inline: true,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index_template.html'
    })
  ]
};