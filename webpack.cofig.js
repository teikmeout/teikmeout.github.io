// no need to install path, it's pre included in Node
const path = require('path');
// npm i --save-dev extract-text-weback-plugin
const extract = require('extract-text-webpack-plugin');

// instatiation of ETWP telling it what to call the output css file
const ETWP = new extract({
  filename: 'main.css'
});

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath:'/dist' // so webpack dev server can find this file
  },
  module : {
    rules : [
      /////////////////
      // rule for js files, need to add jsx
      {
        test: /\.js$/,  // regex our old friend

        use: [
          // using long form for loader specification
          // short syntax would be:
          // use:[babel-loader] but you can't specify presets so we use
          {
            loader: 'babel-loader',
            // npm i --save-dev babel-core babel-loader babel-preset-2015
            options: {
              // to be able to specify this preset in babel
              presets: ['es2015']
            }
          }
        ]
      },
      //////////////////
      // rule for css files
      {
        test: /\.css$/,
        use: ETWP.extract({
          use: ['css-loader']
          // use reads this array backwards as a pipeline to run with the loaders
          // npm i --save-dev css-loader
        })
      }
      //////////////////
    ]
  },
  plugins: [
    ETWP
  ]
}
