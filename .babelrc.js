const path = require('path')

const fromRoot = (_path) => path.resolve(__dirname, './', _path)

module.exports = (api) => {
  api.cache(false)

  return {
    presets: [
      [
        '@babel/preset-stage-0',
        { decoratorsLegacy: true, pipelineProposal: 'minimal' }
      ],
      '@babel/preset-env',
      '@babel/preset-flow',
      '@babel/preset-react'
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      'react-hot-loader/babel',
      'babel-plugin-dev-expression',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      '@babel/plugin-syntax-dynamic-import',
      'babel-plugin-add-react-displayname',
      'babel-plugin-jsx-control-statements',
      [
        '@babel/plugin-transform-runtime',
        {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: '@babel/runtime'
        }
      ],
      [
        'babel-plugin-module-resolver',
        {
          root: [fromRoot('src')],
          alias: {
            '#components': './src/components',
            '#consts': './src/consts',
            '#utilities': './src/utilities',
            '#common': './src/common',
            '#scenes': './src/scenes',
            '#views': './src/views'
          }
        }
      ],
      [
        'babel-plugin-react-css-modules',
        {
          generateScopedName: '[path]-[name]-[local]',
          handleMissingStyleName: 'warn',
          webpackHotModuleReloading: true,
          context: fromRoot('src'),
          exclude: '(node_modules|no\.css)'
        }
      ]
    ]
  }
}
