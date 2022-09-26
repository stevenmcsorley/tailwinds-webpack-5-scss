const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [    new HtmlWebpackPlugin({  // Also generate a test.html
    filename: 'index.html',
    template: './src/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: "styles.css",
    chunkFilename: "[id].[contenthash].css"
   })],
  devtool: "inline-source-map",
  devServer: {
    // contentBase deprecated in latest webpack v5
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    static: "dist",
    watchFiles: ["src/**/**/*"],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 2 } },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
}