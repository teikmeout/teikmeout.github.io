// this is a config of webpack 2
// different from webpack 1, so read up...

'use strict';
// no need to install path, it's pre included in Node
const path = require('path');
// npm i --save-dev extract-text-weback-plugin
const extract = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// instatiation of ETWP telling it what to call the output css file
const ETWP = new extract({filename: "style.css"});

// instatiation of html-webpack-plugin
// this is the config I'm pretty sure is failing
const HTML = new HtmlWebpackPlugin({
  title: 'teikmeout.com',
  xhtml: true,
  inject: false,
  template: require('html-webpack-template'),
  appMountId: 'root-container'
  // scripts: [
  // ]
});

// I put these variables here to permiate throughout
// the rest of the config file and easily change them
// where to build out the directory
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
          use: ['style-loader','css-loader'] // so webpack can import css into JS
        })
      }
    ]
  },
  // 4. Plugins
  plugins: [
    ETWP,
    HTML
  ],
  // this is a property that allows us to modify the devServer part of webpack
  devServer: {
    // content base allows us to tell devserver what folder to output our project from
    contentBase: "./dist",
    publicPath:'/dist' // so webpack dev server can find this file
  }
};


// "devDependencies": {
//     "babel-core": "^6.24.1",
//     // ^^ transpiler for move ES6 to ES5
//     "babel-loader": "^7.0.0",
//     // ^^ plugs it into our webpack flow
//     "babel-preset-es2015": "^6.24.1",
//     "babel-preset-react": "^6.24.1",
//     // features to complie
//     "css-loader": "^0.28.4",
//     "extract-text-webpack-plugin": "^2.1.0",
//     // ^^ grab all the css files and put them in a new file
//     // does not depend on JS
//     "gh-pages": "^1.0.0",
//     "html-webpack-plugin": "^2.28.0",
//     "html-webpack-template": "^6.0.1",
//     "react": "^15.5.4",
//     "react-dom": "^15.5.4",
//     "style-loader": "^0.18.2",
//     // ^^ style loader allows us to inject css into our page
//     // but depends on js so we won't really use it
//     "webpack": "^2.6.0",
//     "webpack-dev-server": "^2.4.5"
//   }
