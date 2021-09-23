/* eslint-disable @typescript-eslint/no-var-requires */
const Encore = require("@symfony/webpack-encore");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");


if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "development");
}

Encore
    .setOutputPath("dist")
    .setPublicPath("/")
    .addEntry("plugin/main", "./src/main.ts")
    .addEntry("demo/app", "./demo/app.ts")
    .enableSassLoader()
    .enablePostCssLoader()
    .splitEntryChunks()
    .cleanupOutputBeforeBuild()
    .enableVueLoader()
    .enableTypeScriptLoader()
    .enableSourceMaps(Encore.isDev())
    .enableSingleRuntimeChunk()
    .configureDevServerOptions((options) => {
        options.open = true;
    })
    .addPlugin(new HtmlWebpackPlugin({
        chunks: ["demo/app", "demo/styles"]
    }));

const config = Encore.getWebpackConfig();

Object.assign(config.resolve, {
    plugins: [
        new TsconfigPathsPlugin({ configFile: "tsconfig.json" })
    ]
});

module.exports = config;
