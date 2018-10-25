const path = require('path'),
  CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: { index: path.join(__dirname, '..', 'src', 'index.js') },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].borveltGithubIo.js',
    publicPath: '/',
    library: 'borveltGithubIo',
    globalObject: 'this',
    libraryTarget: 'umd',
  },
  externals: [],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env'],
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..'),
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
