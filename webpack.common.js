const path = require('path');

module.exports = {
  entry: {
    client: './lib/components/index.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
          options: {
            presets: [
              '@babel/preset-env', 
              '@babel/preset-react' 
            ],
            plugins: [
              '@babel/plugin-transform-runtime', 
              '@babel/plugin-transform-async-to-generator'
            ]
          }
        }
      }
    ]
  }
}