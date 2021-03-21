const { resolve } = require("path");
const webpack = require("webpack"),
	{ BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"),
	{ merge } = require("webpack-merge");

const sharedWebpackConfig = require("./webpack.config");

const developmentConfig = {
	mode: "development",
	devtool: "eval-source-map",

	output: {
		publicPath: "/",
	},

	entry: [
		"react-hot-loader/patch", // activate HMR for React
		"./index.tsx", // the entry point of our app
	],

	devServer: {
		hot: true,
		port: 3000,
	},

	plugins: [
		new BundleAnalyzerPlugin({ openAnalyzer: false }),
		new webpack.HotModuleReplacementPlugin(),
	],
};
module.exports = merge(sharedWebpackConfig, developmentConfig);
