const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: '/node_modules/',
				loader: 'babel-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				// include: path.resolve(__dirname, 'src/style'),
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				],
			},
		],
	},
		plugins: [
			new HtmlWebpackPlugin({
				template: 'src/index.html'
			}),
		],
};
