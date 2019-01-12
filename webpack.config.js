const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode:'development',
    entry: './app/components/app/app.component.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader'
            },
            {
                test: /\.(html|css)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'components/[name]/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts'],
        alias: {
            '#': path.resolve(__dirname, 'app')
        }
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './app/index.html', to: './index.html' },
            { from: './app/index.css', to: './index.css' }
        ])
    ]
};