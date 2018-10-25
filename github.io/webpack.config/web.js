const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  CompressionPlugin = require('compression-webpack-plugin'),
  zopfli = require('@gfx/zopfli')

module.exports = {
  mode: 'production',
  entry: { index: path.join(__dirname, '..', 'src', 'index.js') },
  output: {
    path: path.join(__dirname, '..', 'web'),
    filename: '[name].js',
    chunkFilename: '[name].[contenthash].js',
    publicPath: '/',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
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
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['web'], {
      root: path.join(__dirname, '..'),
    }),
    new HtmlWebpackPlugin({
      title: 'borvelt.github.io',
      template: path.join(__dirname, '..', 'src', 'template.html'),
      inject: true,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new CompressionPlugin({
      compressionOptions: {
        numiterations: 15,
      },
      algorithm(input, compressionOptions, callback) {
        return zopfli.gzip(input, compressionOptions, callback)
      },
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
}
