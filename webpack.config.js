// this is a config of webpack 2
// different from webpack 1, so read up... buddy

// dependencies explained by use
//    "extract-text-webpack-plugin": "^2.1.0",
//     // ^^ grab all the import for css files and put them in a new css file
//    // does not depend on JS
//     "babel-core": "^6.24.1",
//     // ^^ transpiler for move ES6 to ES5
//     "babel-loader": "^7.0.0",
//     // ^^ plugs it into our webpack flow
//     "style-loader": "^0.18.2",
//     // ^^ style loader allows us to inject css into our page
//     // but depends on js so we won't really use it


'use strict'
// no need to install path, it's pre included in Node, just require it
const path = require('path');
const extract = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// instatiation of ETWP telling it what to call the output css file
// only takes on argument, can have many key pair items
const ETWP = new extract({filename: "style.css"});

// instatiation of html-webpack-plugin
// this is the config I'm pretty sure is failing
// const HTML = new HtmlWebpackPlugin({
//   title: 'teikmeout',
//   xhtml: true,
//   inject: false,
//   template: require('html-webpack-template'),
//   appMountId: 'root-container'
//   // scripts: [
//   // ]
// });

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  // webpack consists in 4 major parts
  // 1. Entry Point where webpack is going to start reading files from
  entry: `${APP_DIR}/index.jsx`,
  // 2. Output where webpack is going to put the compiled files
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    // this also helps github pages deployment know where to find files

  },
  // 3. Modules you are going to use in webpack
  module : {
    rules : [
      /////////////////
      // rule for js files, need to add jsx
      {
        test: /\.(js|jsx)$/,  // regex our old friend
        exclude: /node_modules/,
        use: [
          // using long form for loader specification
          // short syntax would be:
          // use:[babel-loader] but you can't specify presets so we use
          {
            loader: 'babel-loader',
            // npm i --save-dev babel-core babel-loader babel-preset-2015
            options: {
              // to be able to specify this preset in babel
              presets: ['es2015', 'react']
            }
          }
        ]
      },
      // end of rule for js files
      //////////////////

      //////////////////
      // rule for css files
      /*{
        test: /\.css$/,
        use: ETWP.extract('css-loader')
          // use reads this array backwards as a pipeline to run with the loaders
          // npm i --save-dev css-loader
      },*/
      // end of rule for css files
      //////////////////
      {
        test: /\.css$/,
        use: ETWP.extract({
          use: ['css-loader'] // so webpack can import css into JS
        })
      }
    ]
  },
  // 4. Plugins
  plugins: [
    ETWP
    // HTML
  ],
  // this is a property that allows us to modify the devServer part of webpack
  devServer: {
    // content base allows us to tell devserver what folder to output our project from
    // contentBase: "./dist",
    // publicPath:'./dist' // so webpack dev server can find this file
    // note that webpack dev server serves these files from memory
    hot: true
  }
  // devtool: 'eval',
  // when using production change this to cheap-module-source-map
  // to only load the dependencies that you want

};
