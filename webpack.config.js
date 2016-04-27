module.exports = {
  entry: [
    './src/index.js',
  ],
  outputs: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
};
