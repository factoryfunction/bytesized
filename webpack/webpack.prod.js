import webpack from 'webpack'
import path from 'path'
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
    ]
  }
})()
