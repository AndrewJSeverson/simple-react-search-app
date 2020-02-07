const proxy = require('http-proxy-middleware');

const TV_MAZE_API_ENDPOINT = 'https://api.tvmaze.com';

module.exports = (app) => {
  app.use(
    '/api/tv',
    proxy({
      target: TV_MAZE_API_ENDPOINT,
      changeOrigin: true,
      pathRewrite: { '^/api/tv': '' },
    }),
  );
};
