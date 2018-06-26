// entry point -> output

const path = require('path');
// console.log(path.join(__dirname, 'public'));
/* we are not goint to use string concatication because different os can manipulate it in a 
different way */

module.exports = {
    'entry': './src/app.js',
    // 'entry': './src/playground/redux-expensify-revision.js',
    // 'entry': './src/playground/hoc.js',
    output: {
        path: path.join(__dirname, 'public'), // absolute path 
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_module/
        }, {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

