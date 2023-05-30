const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    proxy: {
      '/auth': {
        target: 'http://localhost:8080/',
        router: () => 'http://localhost:1234',
        logLevel: 'debug',
      },
      '/notes': {
        target: 'http://localhost:8080/',
        router: () => 'http://localhost:1234',
        logLevel: 'debug',
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
