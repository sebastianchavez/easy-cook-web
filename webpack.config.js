module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                use:'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // other plugins,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ]    
}