const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode:'development',
    entry: './src/components/app/app.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader'
            }, {
                test: /\.(html)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/index.html', to: './index.html' }
        ], {})
    ],
    resolve: {
        extensions: ['.ts']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    }
};