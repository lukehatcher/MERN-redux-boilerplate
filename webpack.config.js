const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: path.resolve(__dirname, 'src', 'index.js'),
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.m?(js|jsx|ts|tsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'ts-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js', '.jsx'],
//   },
// };

// =======

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
      { test: /\.(t|j)sx?$/, use: { loader: 'ts-loader' }, exclude: /node_modules/ },

      {
        enforce: 'pre', test: /\.js$/, exclude: /node_modules/, loader: 'source-map-loader',
      },
    ],
  },
  // throws error
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  // },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
