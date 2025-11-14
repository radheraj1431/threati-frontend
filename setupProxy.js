const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "https://10.1.5.211:8082",
      secure: false,
      changeOrigin: true,
      logLevel: "debug",
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};
