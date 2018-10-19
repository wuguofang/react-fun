var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname); // 项目跟路径
var APP_PATH = path.resolve(ROOT_PATH, 'src'); // 项目开发目录src
var APP_FILE = path.resolve(APP_PATH, 'app.js'); // 项目入口的index.js
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 打包css插件
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: APP_FILE,
  output: {
      path: path.join(__dirname,"./dist"),
      filename: "bundle.js"
  },
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              plugins: ['transform-runtime',["import", {libraryName: "antd", style: "css"}]],
              presets: ['es2015', 'react', 'stage-2']
          }
      }, 
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            'css-loader',
            'autoprefixer-loader',
            'less-loader'

          ]
        })
      },{
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url'
      }]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { 
         NODE_ENV: JSON.stringify("production") 
       }
    }),
    new ExtractTextPlugin("app.css"),
    new HtmlWebpackPlugin({
			template: __dirname + "/index.html",
			filename: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      warnings: false,
      compress: {
          join_vars: true,
          warnings: false,
      },
      toplevel: false,
      ie8: false,
    }),
  ]
};