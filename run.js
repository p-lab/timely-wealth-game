const createServer = require('http-server').createServer;
const launch = require('launchpad');

const server = createServer({
  root: __dirname,
  cache: -1
});

const port = 8080;
server.listen(port);

launch.local((error, launcher) => {
  launcher.chrome(`http://localhost:${port}`, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
