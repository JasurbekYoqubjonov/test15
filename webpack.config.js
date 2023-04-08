const path= require("path")
const HtmlwebpackPlugin= require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    //mode
    mode:"production",
    //entry
    entry:{
        main:path.resolve(__dirname,"./src/js/main"),
        about:path.resolve(__dirname,"./src/js/about")
    },
    //output
    output:{
        path: path.resolve(__dirname, "public"),
        filename:"[name][contenthash].js",
        clean:true,
    },
    //devServer
    devServer:{
        static:{
          directory: path.resolve(__dirname,"public")  
        },
        port:3000,
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true,
    },
    //loader
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test:/\.m?js$/,
                exclude: /(node_modules | bower-components)/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    //plugins
    plugins:[
        new HtmlwebpackPlugin({
            title:"Countries | Home",
            template:"./src/indexTemp.html",
            filename:"index.html",
            chunks:["main"]
        }),

        
        new HtmlwebpackPlugin({
            title:"Countries | About",
            template:"./src/pages/aboutTemp.html",
            filename:"about.html",
            chunks:["about"]
        }),
        new MiniCssExtractPlugin()
    ]
}