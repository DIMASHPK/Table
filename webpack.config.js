let path = require("path");

let conf = {
  entry: "./src/scripts/scripts.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "scripts.js",
    publicPath: "/dist/",
  },
  devServer: {
    overlay: true,
    contentBase: path.join(__dirname, "src"),
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = (env, options) => {
  conf.devtool =
    options.mode === "production" ? false : "cheap-module-eval-source-map";
  console.log(options.mode);

  return conf;
};
