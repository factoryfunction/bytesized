export const javaScriptLoader = {
  test: /\.(js|jsx)$/,
  exclude: /(node_modules)/,
  use: [
    {
      loader: 'babel-loader'
    }
  ]
}

export const cssLoader = {
  test: /\.(pcss|css)$/,
  exclude: /(codemirror)/,
  use: [
    {
      loader: 'style-loader',
      options: {}
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[path]-[name]-[local]'
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    }
  ]
}

export const noCompileCssLoader = {
  test: /no\.(css)$/,
  use: [
    {
      loader: 'style-loader',
      options: {}
    },
    {
      loader: 'css-loader'
    }
  ]
}

export const fontLoader = {
  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  exclude: /node_modules/,
  loader: 'url-loader?limit=10000&mimetype=application/font-woff'
}

export const fileLoader = {
  exclude: /node_modules/,
  test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: 'file-loader'
}

export const svgLoader = {
  test: /\.svg$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader'
    },
    {
      loader: 'react-svg-loader',
      options: {
        jsx: true
      }
    }
  ]
}

export const urlLoader = {
  test: /\.png/,
  loader: 'url-loader'
}
