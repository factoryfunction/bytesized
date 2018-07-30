import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import postcss from 'rollup-plugin-postcss'
import replace from 'rollup-plugin-re'
const path = require('path')

const fromRoot = (_path) => path.resolve(__dirname, './', _path)

process.env.IS_ROLLUP = true

// POSTCSS plugins
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'

const babelOptions = {
  babelrc: false,
  presets: [
    [
      '@babel/preset-stage-0',
      { decoratorsLegacy: true, pipelineProposal: 'minimal' }
    ],
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-flow'
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-syntax-dynamic-import',
    'babel-plugin-dev-expression',
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: false,
        polyfill: false,
        regenerator: true,
        moduleName: '@babel/runtime'
      }
    ]
  ]
}

export default {
  input: 'src/sandbox/index.js',
  output: {
    file: 'public/scripts/sandbox.js',
    format: 'iife',
    sourcemap: 'inline'
  },
  plugins: [
    commonjs({
      namedExports: {
        react: ['Children', 'Component', 'createElement'],
        'react-dom': ['render']
      }
    }),
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false }),
        cssnano()
      ],
      extensions: ['.css']
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    babel({
      exclude: 'node_modules/**',
      ...babelOptions
    }),
    replace({
      exclude: 'yoloman',
      replaces: {
        'process.env.NODE_ENV': process.env.NODE_ENV
      }
    }),
    process.env.NODE_ENV === 'production' && uglify()
  ]
}
