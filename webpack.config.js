var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app/app.ts'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['react-hot', 'awesome-typescript-loader']
      }
    ]
  }
};
