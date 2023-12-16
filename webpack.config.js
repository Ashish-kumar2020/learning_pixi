const path = require("path");

module.exports = {
  entry: "./Basic/Container.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
