const withAssetsImport = require("next-assets-import");
require("dotenv").config();

const withPlugins = require("next-compose-plugins");

const nextConfig = {
  assetPrefix: "expo-os/"
};

module.exports = withPlugins([withAssetsImport],nextConfig);
