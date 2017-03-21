module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath:'/build/'
    },
    module: {
        loaders: [{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }]
    }
}