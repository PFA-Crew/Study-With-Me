const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
   devServer: {
    port: 8080,
    hot: true,
    open: true,
    proxy: {
        '/auth': {
            target: 'http://localhost:8080/',
            router: () => 'http://localhost:1234',
            logLevel: 'debug'
        }
    }
   },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
        ]
    }
}