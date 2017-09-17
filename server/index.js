const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const webpackCfg = require("../webpack.config.js");

const compiler = webpack(webpackCfg);

//init server
const app = new webpackDevServer(compiler, {
  //注意此处publicPath必填
  publicPath: webpackCfg.output.publicPath,
  hot: true,
});

app.listen(8081, "localhost", function (err) {
  if (err) {
    console.log(err);
  }
});

console.log("listen at http://localhost:8081");