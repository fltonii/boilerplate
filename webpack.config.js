const HtmlWebPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  mode: 'development',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.js$/,

        use: ['source-map-loader'],
        enforce: 'pre'
      }
    ]
  },
  plugins: [
    new HtmlWebPlugin({
      template: './public/index.html',
      filename: 'index.html'
    })
  ]
};
