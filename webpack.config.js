const path = require('path');
const dist = 'docs'

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, dist)
    },
    module: {
        rules: [{
            test: /\.html$/, 
            use: {
                loader: 'file-loader',
                options:{
                    name: '[name].[ext]'
                }
            }},{
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },{
                test: /\.worker.js$/,
                use: {
                    loader: 'worker-loader',
                    options:{
                    //    inline: true
                    }
                }
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, dist),
        compress: true,
        port: 9000
    }
};