const path = require('path');

module.exports = {
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    }
};