module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {

    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
        }
 }

};
