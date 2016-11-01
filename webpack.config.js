var path = require('path');

module.exports = {

    entry: path.join(__dirname, 'public', 'src', 'js', 'index.js'),

    output: {
        path: path.join(__dirname, 'public', 'src'),
        filename: 'app.js'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.ts/,

                loaders: ['ts-loader'],

                // Skip any files outside of your project's `src` directory
                include: [
                    path.resolve(__dirname, "public", "src", "js"),
                ],

                exclude: /node_modules/
            },
        ]
    }
}
