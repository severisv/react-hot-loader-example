const path = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = {
    entry: {
        'reactapp': [
          'babel-polyfill',
          'react-hot-loader/patch',
          './index.tsx'
        ]
      },

    output: {
        path: path.resolve("../dist"),
        filename: "[name].js",
        publicPath: '/'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
        modules: [path.resolve("./node_modules"), path.resolve("./")],
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/,
            },
            { test: /\.(jpg|png|svg)$/, loader: "url-loader" },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: { sourceMap: true },
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true,
                            paths: [path.join(__dirname, "static")],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
            },
        ],
    },
    plugins: [new CheckerPlugin()],
};
