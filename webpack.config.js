var path = require('path');
var webpack = require('webpack');

module.exports = {

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
        new webpack.optimize.CommonsChunkPlugin({ name: [ 'app', 'vendor', 'polyfills'] })
    ],

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.ts/,

                loaders: [ 'ts-loader' ],

                // Skip any files outside of `src` directory
                include: [
                    path.resolve(__dirname, "public", "src"),
                ],

                exclude: /node_modules/
            }
        ]
    }
}
