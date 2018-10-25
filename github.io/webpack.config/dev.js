const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: { index: path.join(__dirname, '..', 'src', 'index.js') },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-syntax-dynamic-import',
          ],
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {},
          },
          {
            loader: 'css-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'borvelt.github.io',
      template: path.join(__dirname, '..', 'src', 'template.html'),
      inject: true,
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, '..', 'src'),
      components: path.resolve(__dirname, '..', 'src', 'components'),
      containers: path.resolve(__dirname, '..', 'src', 'containers'),
      images: path.resolve(__dirname, '..', 'src', 'images'),
    },
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  devServer: {
    stats: {
      colors: true,
    },
    watchOptions: {
      ignored: /node_modules/,
    },
    compress: false,
    port: 9000,
    hot: true,
  },
}
