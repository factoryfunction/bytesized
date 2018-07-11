import webpack from 'webpack'
import dateTime from 'dayjs'
import path from 'path'

import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin'
import WriteFilePlugin from 'write-file-webpack-plugin'
import HtmlPlugin from 'html-webpack-plugin'
import DotEnvPlugin from 'dotenv-webpack'

import { name } from '../package.json'
import * as loaders from './loaders'

const fromRoot = (_path) => path.resolve(__dirname, '../', _path)

module.exports = (() => {
  return {
    mode: 'development',
    devtool: 'source-map',
    context: fromRoot('src'),

    entry: ['./index.js'],

    output: {
      filename: 'pack.js',
      path: fromRoot('public')
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules']
    },

    serve: {
      content: fromRoot('public'),
      disableHostCheck: true,
      port: 4000,
      dev: {
        publicPath: '/'
      },
      hot: {
        hmr: true
      },
      historyApiFallback: true
    },

    module: {
      rules: [
        loaders.noCompileCssLoader,
        loaders.javaScriptLoader,
        loaders.cssLoader,
        loaders.fontLoader,
        loaders.fileLoader,
        loaders.svgLoader,
        loaders.urlLoader
      ]
    },

    plugins: [
      new webpack.EnvironmentPlugin(),

      new HtmlPlugin({
        publicPath: '/',
        template: fromRoot('src/index.html'),
        alwaysWriteToDisk: false,
        title: 'bytesized'
      }),

      new WriteFilePlugin({
        test: /\.html$/,
        useHashIndex: false
      }),

      new HtmlWebpackHarddiskPlugin()
    ]
  }
})()
