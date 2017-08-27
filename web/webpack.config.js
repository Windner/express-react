var webpack = require('webpack')

var definePlugin = new webpack.DefinePlugin({
  HOST_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
});

module.exports = {
  entry: './router.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
        test: /\.css$/,
        loader: "style!css" 
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  devServer: {
      historyApiFallback: true
  },
  plugins: [definePlugin]
};
