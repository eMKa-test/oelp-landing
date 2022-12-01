module.exports = {
    plugins: [
        require("postcss-flexbugs-fixes"),
        require("autoprefixer"),
        require("postcss-preset-env")({
            browsers: "last 2 versions",
        }),
    ],
};
