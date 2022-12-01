const DEV_MODE = (process.env.NODE_ENV !== "production");
const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.BUILD_NUMBER = "1.0";

const dotenv = require("dotenv");
let envFile = `.env.${process.env.CROSS_ENV}`;
try {
    fs.accessSync(envFile, fs.constants.R_OK);
} catch {
    envFile = ".env.default";
}
// eslint-disable-next-line global-require
const envConfig = dotenv.parse(fs.readFileSync(envFile));
Object.entries(envConfig).forEach(([k, val]) => {
    process.env[k] = val;
});

const SRC_DIR = path.resolve(__dirname, process.env.NODE_PATH);
const DIST = path.resolve(__dirname, "public_html");
const {
    HOST: host,
    DEV_PORT,
} = process.env;

const appDirectory = fs.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || "")
    .split(path.delimiter)
    .filter((folder) => folder && !path.isAbsolute(folder))
    .map((folder) => path.resolve(appDirectory, folder))
    .join(path.delimiter);

const config = {
    entry: {
        init: `${SRC_DIR}/index.js`,
    },
    output: {
        path: DIST,
        publicPath: DEV_MODE ? "/" : "",
        filename: DEV_MODE ? "js/[name].js" : "js/[name].[contenthash:8].js",
    },

    resolve: {

        modules: ["node_modules", path.resolve(__dirname, "node_modules")]
            .concat(SRC_DIR.split(path.delimiter).filter(Boolean)),
        extensions: [".js", ".json", ".jsx"],
        alias: {
            "react-router-dom": path.resolve(__dirname, "node_modules/react-router-dom"),
            "@babel/runtime": path.resolve(__dirname, "node_modules/@babel/runtime"),
            "hoist-non-react-statics": path.resolve(__dirname, "node_modules/hoist-non-react-statics"),
            "performance-now": path.resolve(__dirname, "node_modules/performance-now"),
        },
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: require.resolve("babel-loader"),
                options: { cacheDirectory: true },
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: !DEV_MODE,
                            reloadAll: true,
                            publicPath: "../",
                        },
                    },
                    {
                        loader: require.resolve("css-loader"),
                    },
                    {
                        loader: require.resolve("postcss-loader"),
                    },
                    {
                        loader: require.resolve("sass-loader"),
                    },
                    {
                        loader: "sass-resources-loader",
                        options: {
                            resources: [
                                `${SRC_DIR}/style/_constants.scss`,
                                `${SRC_DIR}/style/_mixins.scss`,
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(bmp|gif|jpe?g|png|svg|obj|mtl|gltf|bin|glb|hdr|3ds|fbx)$/,
                loader: require.resolve("file-loader"),
                options: {
                    limit: 10000,
                    name: "assets/images/[name].[contenthash:8].[ext]",
                },
            },
            {
                test: /\.(woff|woff2|otf|ttf|eot)$/,
                loader: require.resolve("file-loader"),
                options: {
                    limit: 10000,
                    name: "assets/fonts/[name].[contenthash:8].[ext]",
                },
            },
        ],
    },

    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    maxSize: 100000,
                    minSize: 50000,
                    name: "vendors",
                    test: /node_modules/,
                    chunks: "all",
                    enforce: true,
                },
            },
        },
    },

    stats: "normal",

    devtool: DEV_MODE ? "inline-source-map" : false,

    devServer: {
        compress: true,
        hot: true,
        port: DEV_PORT,
        host,
        contentBase: path.join(__dirname, "public_html"),
        clientLogLevel: "silent",
        stats: "normal",
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["*"],
        }),
        new webpack.LoaderOptionsPlugin({ debug: false }),
        new MiniCssExtractPlugin({
            filename: DEV_MODE ? "css/[name].css" : "css/[name].[hash:8].css",
        }),
        new HtmlWebpackPlugin({
            title: "Сфера - система контроля процесса строительства",
            bodyClass: "landing-body",
            favicon: "assets/favicons/favicon.ico",
            logo: "assets/sphere_logo_2.png",
            template: "src/template.html",
            filename: "index.html",
            chunks: ["init"],
            minify: false,
        }),
    ],
};

module.exports = config;
