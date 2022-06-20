const { resolve } = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './server.ts',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [resolve(__dirname, 'app'), 'node_modules'],
    alias: {
      '@': resolve(__dirname, 'app/'),
    }
  },
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'dist'),
  },
}