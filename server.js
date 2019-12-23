const {createServer} = require('http');
const {join} = require('path');
const {parse} = require('url');
const next = require('next');

const port = process.env.PORT || 3000;
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((request, respose) => {
    const parsedUrl = parse(request.url, true);
    const {pathname} = parsedUrl;

    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, '.next', 'static', pathname);
      app.serveStatic(request, respose, filePath);
      return;
    }

    handle(request, respose, parsedUrl);
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
