var httpServer = require('http-server');
var launch = require('launchpad');

var createServer = httpServer.createServer;

var server = createServer({
  root: __dirname,
  cache: -1
});

server.listen(8080);

launch.local(function (error, launcher) {
  launcher.chrome('http://localhost:8080', function (err, instance) {
    instance.on('stop', function () {
      console.log('Browser closed');
      server.close();
      process.exit(0);
    });
  });
});
