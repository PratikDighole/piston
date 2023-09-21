const cors_proxy = require('cors-anywhere');

// Listen on a specific host and port
const host = 'localhost'; // or any other host you prefer
const port = 8080; // or any available port

cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
}).listen(port, host, () => {
  console.log(`CORS Anywhere server is running on ${host}:${port}`);
});
