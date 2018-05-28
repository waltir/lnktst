const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// WEBPACK NEEDS TO KNOW THE ENTRY POINT -> AND OUTPUT

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css')

  return {
      entry: './src/app.js',
      output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
      },
      module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }]
      },
      plugins: [
        CSSExtract
      ],
      devtool: isProduction ? 'source-map' : 'inline-source-map',
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
      }
    };
};

// LOADER - LETS YOU CUSTOMIZE WEBPACK WHEN IT LOADS A GIVEN FILE
// WHEN WEBPACK SEES A JS FILE - RUN THROUGH BABEL TO COMPILE THE JSX TO REGULAR JS FOR WEBPACK
// HOW A FILE GETS TRANSFORMED WHEN WEBPACK SEES IT
// BABEL CLI ALLOWS YOU TO RUN BABLE FROM THE TERMINAL
// BABEL CORE ALLOWS YOU TO RUN BABEL FROM ANOTHER PROGRAM OR FILE
// BABEL-LOADER IS A WEBPACK PLUGIN FOR BABEL - ALLOWS US TO TELL WEBPACK HOW TO REACT WHEN IT SEES CERTAIN FILES
