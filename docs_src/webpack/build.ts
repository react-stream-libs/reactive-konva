import * as path from 'path';
import * as webpack from 'webpack';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';

const config: webpack.Configuration = {
  entry: {
    main: [
      'babel-polyfill',
      path.resolve(__dirname, '../index.tsx'),
    ],
  },
  output: {
    filename: 'index.js',
    path: 'docs',
    libraryTarget: 'umd',
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'node_modules/monaco-editor/min/vs',
      to: 'vs',
    }]),
  ],
  resolve: {
    extensions: [
      '.js', '.es6', '.jsx',
      '.ts', '.tsx',
    ],
    alias: {
      'reactive-konva-src': path.resolve(__dirname, '../../src'),
    }
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.es6$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.ts$/,
        loader: 'babel-loader!ts-loader',
        exclude: /node_modules/,
      }, {
        test: /\.tsx$/,
        loader: 'babel-loader!ts-loader',
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      }, {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass?sourceMap',
        ],
        exclude: /app\/styles/,
      }, {
        test: /\.woff$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]',
      }, {
        test: /\.woff2$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]',
      },{
        test: /\.ttf$/,
        loader: 'file-loader?name=[name].[ext]',
      }, {
        test: /\.eot$/,
        loader: 'file-loader?name=[name].[ext]',
      }, {
        test: /\.svg$/,
        loader: 'file-loader?name=[name].[ext]',
      }, {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
}
module.exports = config;