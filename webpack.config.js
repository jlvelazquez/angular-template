const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  context: resolve(__dirname, 'src'),
  devtool: env.prod ? 'source-map' : 'eval',
  bail: env.prod,
  entry: resolve(__dirname, 'src', 'app', 'index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.[chunkhash].js',
    pathinfo: !env.prod
  },
  devServer: {
    inline: true,
    contentBase: resolve(__dirname, 'dist'),
    port: 3333
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js?$|\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'stylus']
      },
      {
        test: /\.jade$/,
        exclude: /node_modules/,
        loader: 'pug'
      },
      {
        test: /\.jpg$/,
        exclude: /node_modules/,
        loader: 'file'
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: 'url',
        query: {
          mimetype: 'image/png'
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html'
      },
      {
        test: /\.json$/,
        include: /node_modules/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
});
