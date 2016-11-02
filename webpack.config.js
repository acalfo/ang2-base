var path = require('path');
var webpack = require('webpack');

module.exports = {

    devtool: 'eval',
    cache: true,

    entry: {
        'polyfills': path.join(__dirname, 'public', 'src', 'polyfills.ts'),
        'vendor': path.join(__dirname, 'public', 'src', 'vendor.ts'),
        'app': path.join(__dirname, 'public', 'src', 'main.ts')
    },

    output: {
        path: path.join(__dirname, 'public', 'dist', 'js'),
        filename: '[name].js'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: [ 'app', 'vendor', 'polyfills'], children:  true, minChunks: 2 })
    ],

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts/,

                loaders: [ 'ts-loader?cacheDirectory', 'angular2-template-loader?cacheDirectory'],

                // Skip any files outside of `src` directory
                include: [
                    path.join(__dirname, "public", "src"),
                ]
            }, {
                test: /\.html$/,

                loader: 'raw-loader?cacheDirectory',

                // Skip any files outside of `src` directory
                include: [
                    path.join(__dirname, "public", "src"),
                ]
            }
        ]
    }
}
