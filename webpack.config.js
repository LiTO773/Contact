var webpack = require('webpack')
var path = require('path')

module.exports = [
  {
	  context: path.join(__dirname, 'src'),
	  entry: './js/client.js',
	  module: {
    loaders: [
		  {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
			  presets: ['react', 'es2015', 'stage-0'],
			  plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
		  }
    ]
	  },
	  target: 'electron-renderer',
	  output: {
	    path: __dirname + '/src/',
	    filename: 'client.min.js'
	  }
  }
]
