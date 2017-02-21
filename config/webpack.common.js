const webpack = require('webpack');
const helpers = require('./helpers');

var fs = require('fs')
var path = require('path')

/*
 * Webpack Plugins
 */
// problem with copy-webpack-plugin
const AssetsPlugin = require('assets-webpack-plugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer')



/*
 * Webpack Constants
 */

const METADATA = {
    title: 'Blood Monitor',
    baseUrl: '/',
    isDevServer: helpers.isWebpackDevServer()
};

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function (options) {
    isProd = options.env === 'production';
    return {

        entry: {
            'main': "./app/App.js"
        },
        output: {
            filename: "public/bundle.js"
        },
        resolve: {
            modules: ['node_modules'],
            extensions: ['.js', '.json','.sass'],


        },
        module: {

            rules: [

                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015']
                    }
                },

                {
                    test: /\.json$/,
                    use: 'json-loader'
                },

                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        //resolve-url-loader may be chained before sass-loader if necessary
                        use: ['css-loader', 'sass-loader']
                    })
                },

                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader'
                },

            ],

        },

        plugins: [
            new ExtractTextPlugin('public/[name].css'),


            new AssetsPlugin({
                path: helpers.root('public'),
                filename: 'webpack-assets.json',
                prettyPrint: true
            }),


            /*
             * Plugin: CommonsChunkPlugin
             * Description: Shares common code between the pages.
             * It identifies common modules and put them into a commons chunk.
             *
             * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
             * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
             */
            // new CommonsChunkPlugin({
            //     name: 'polyfills',
            //     chunks: ['polyfills']
            // }),
            // // This enables tree shaking of the vendor modules
            // new CommonsChunkPlugin({
            //     name: 'vendor',
            //     chunks: ['main']
            //     //minChunks: module => /node_modules\//.test(module.resource)
            // }),
            // // Specify the correct order the scripts will be injected in
            // new CommonsChunkPlugin({
            //     name: ['polyfills', 'vendor'].reverse()
            // }),

            new CopyWebpackPlugin([
                { from: 'app/assets', to: 'assets' },
            ]),
            /*
             * Plugin: HtmlWebpackPlugin
             * Description: Simplifies creation of HTML files to serve your webpack bundles.
             * This is especially useful for webpack bundles that include a hash in the filename
             * which changes every compilation.
             *
             * See: https://github.com/ampedandwired/html-webpack-plugin
             */
            // new HtmlWebpackPlugin({
            //     template: 'public/index.html',
            //     title: METADATA.title,
            //     chunksSortMode: 'dependency',
            //     metadata: METADATA,
            //     inject: 'head'
            // }),


            new ScriptExtHtmlWebpackPlugin({
                defaultAttribute: 'defer'
            }),

            /*
             * Plugin: HtmlElementsPlugin
             * Description: Generate html tags based on javascript maps.
             *
             * If a publicPath is set in the webpack output configuration, it will be automatically added to
             * href attributes, you can disable that by adding a "=href": false property.
             * You can also enable it to other attribute by settings "=attName": true.
             *
             * The configuration supplied is map between a location (key) and an element definition object (value)
             * The location (key) is then exported to the template under then htmlElements property in webpack configuration.
             *
             * Example:
             *  Adding this plugin configuration
             *  new HtmlElementsPlugin({
             *    headTags: { ... }
             *  })
             *
             *  Means we can use it in the template like this:
             *  <%= webpackConfig.htmlElements.headTags %>
             *
             * Dependencies: HtmlWebpackPlugin
             //  */
            // new HtmlElementsPlugin({
            //     headTags: require('./head-config.common')
            // }),

        ],

        node: {
            global: true,
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }

    };
}
