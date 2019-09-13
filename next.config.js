const withAssetsImport = require("next-assets-import");
require("dotenv").config();

const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withAssetsImport]);
