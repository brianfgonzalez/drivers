var path = require('path')
var webpack = require('webpack')
//console.log(path.resolve(__dirname, "js"))

module.exports = {
  entry: ['./react/js/index'],
  output: {
    path: path.join(__dirname, "react/build"),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        include: path.join(__dirname, "react/js"),
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react'],
          plugins: ['transform-class-properties']
        }
    }]
  },
  resolve: {
    modules: ["./node_modules"]
  },
}
