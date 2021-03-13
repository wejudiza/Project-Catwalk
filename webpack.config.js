const path = require('path');
const BrotliPlugin = require('brotli-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  watch: true,
  mode: 'production',
  entry: path.resolve(__dirname, './client/src'),
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new BrotliPlugin({ //brotli plugin
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  //   new CompressionPlugin({
  //   filename: '[path].gz[query]',
  //   algorithm: 'gzip',
  //   test: /\.(js|css|html|svg)$/,
  //   threshold: 8192,
  //   minRatio: 0.8
  //   })
  ],
};
