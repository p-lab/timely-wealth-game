var createServer = require('http-server').createServer;
var launch = require('launchpad');

var server = createServer({
  root: __dirname,
  cache: -1
});

var port = 8080;
server.listen(port);

launch.local(function (error, launcher) {
  launcher.chrome(`http://localhost:${port}`, function (err, worker) {
    if (err) {
      console.error(err);
      return;
    }
  });
});
