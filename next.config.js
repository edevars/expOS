const withAssetsImport = require("next-assets-import");
const webpack = require("webpack");
require("dotenv").config();

const withPlugins = require("next-compose-plugins");

const nextConfig = {
  
};

module.exports = withPlugins([withAssetsImport], nextConfig);
