
var createServer = require('http-server').createServer;
var launch = require('launchpad');

var server = createServer({
  root: __dirname
});

server.listen(8080);

launch.local(function (error, launcher) {
  launcher.chrome('http://localhost:8080', function (err, instance) {
    instance.on('stop', function () {
      console.log('Browser closed');
      process.exit(0);
    });
  });
});
