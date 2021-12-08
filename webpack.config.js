const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')

const dirIndex=__dirname+'/public'
const dirJs=__dirname+'/src'
const assets={
    file:{
        test: /\.(png|jpe?g|gif|svg|gif)$/i,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            publicPath: '/assets/img/',
            outputPath: '/assets/img/'
        },
    },
    fonts:{
        test: /\.(eot|woff|woff2|ttf)$/i,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            publicPath: '/assets/fonts/',
            outputPath: '/assets/fonts/'
        },
    },
}
module.exports= (env, argv) => {
    var cssLoader='style-loader';
    var jsPath='';
    if(argv.mode === 'production' ){
        cssLoader = MiniCssExtractPlugin.loader
        jsPath = 'http://moiworking.s3-website.us-east-2.amazonaws.com/'
        cssLoader = MiniCssExtractPlugin.loader
    }
    return {
        mode: argv.mode,
        entry: join(dirJs, 'app.js'),
        output: {
            path: join(__dirname, 'build'),
            publicPath: jsPath,
            filename: 'app.bundled.js?v=1.0.3'
        },
        devServer: {
            port: 8182,
            host: '0.0.0.0',
            hot: true,
            open: true,
            historyApiFallback: true
        },
        module:{
            rules:[
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                },
                {
                    test: /\.(scss|sass)$/,
                    use:[
                        cssLoader,
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg|gif)$/i,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: '/public/assets/img/',
                        outputPath: '/public/assets/img/'
                    },
                },
                {
                    test: /\.(eot|woff|woff2|ttf)$/i,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: '/public/assets/fonts/',
                        outputPath: '/public/assets/fonts/'
                    },
                },
                
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        plugins:[
            new HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                favicon:join(dirIndex,'favicon.ico'),
                title: 'moiworking.com',
                template: join(dirIndex,'index.html'),
                cache:false,
                showErrors:true,
                hash:true
            }),
            new MiniCssExtractPlugin({
                publicPath: '',
                filename: 'assets/css/main.css?v=1.0.3',
                chunkFilename: 'assets/css/chuck.css?v=1.0.3',
            }),
        ]
    };
    
}