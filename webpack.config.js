const path = require("path");

module.exports = {
  entry: "./src/bootstrap.js", // Entry point remains the same
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-react-component.bundle.js", // Changed name to indicate it's a bundle
    library: "MyComponentLibrary",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // Removed the externals object
};
