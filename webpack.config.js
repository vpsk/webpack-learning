var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname,"dist"),
		filename: 'app.bundle.js'
	},
	module: {
		rules : [
			{test: /\.scss$/, use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader','sass-loader'],
				publicPath: '/dist'
			})}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		title: 'My project',
		minify: {
			collapseWhitespace: true
		},
		hash: true,
		template: './src/index.ejs',
	}),
	new ExtractTextPlugin({
		filename: 'app.css',
		disable: false,
		allChunks: true
	})
	]
}