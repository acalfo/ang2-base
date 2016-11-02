var path = require('path'),
    webpack = require('webpack'),
    ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin,
    CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

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

        /* Description: Shares common code between the pages. */
        new CommonsChunkPlugin({ name: ['polyfills', 'vendor'].reverse() }),

        /* Description: Do type checking in a separate process, so webpack don't need to wait. */
        new ForkCheckerPlugin(),
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
