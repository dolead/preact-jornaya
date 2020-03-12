const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/JornayaComponent.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'JornayaComponent.js',
        libraryTarget: 'commonjs2',
    },
    externals: {
        preact: 'preact',
        'preact/hooks': 'preact/hooks',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            },
        ],
    },
    optimization: {
        minimize: true,
    },
};
