const path = require('path');
module.exports = {
    watch: true,    
    entry: {
        hilbertcurve: './Index.ts',      
    },    
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist/'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    }
}
