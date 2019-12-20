const path = require('path');
const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// process.env.NODE_ENV = process.env.NODE_ENV || "development";
// if(process.env.NODE_ENV === 'development')
// {
//  const dotenv = require('dotenv').config({path: path.resolve(__dirname, '.env')})
// }
// else {
//   const dotenv = require('dotenv').config({path: path.resolve(__dirname, '.env')})
  
// }

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.m?js$/,
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    "plugins": [
                        "@babel/plugin-proposal-object-rest-spread"
                      ]
                }
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        historyApiFallback: true,
        proxy: {
            // for when you have a separate API backend development server and you want to send API requests on the same domain
            '/api': 'http://localhost:8080'
          }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "My Grocery List",
            template: "src/index.html",
            filename:"index.html"

        })
    
    ]
})