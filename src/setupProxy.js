const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://api.dev.lellall.com/',
      changeOrigin: true,
    })
  );
};
