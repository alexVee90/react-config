const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './lib/components/template.html'
    })
  ],
  devServer: { 
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',  
          'sass-loader'
        ]
      }
    ]
  }
})