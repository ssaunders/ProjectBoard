'use strict';

// var path = require('path');

var app = require('./app'),
  port = process.env.PORT || 8500,
  running = false,
  server = null;


startServer(port);

module.exports = {
  start: startServer,
  stop: stopServer
};

function startServer(port) {
  var startTime;

  if (server && running) {
    console.warn('Server already running on port', app.address().port);
    return;
  }
  server = app.listen(port);
  server.on('listening', function() {
    startTime = new Date();
    console.log('Server running at http://localhost:' + port, {
      startTime: startTime
    });
    running = true;
  });
  server.on('close', function() {
    var stopTime = new Date();
    console.log('Shutting down server', {
      startTime: startTime,
      stopTime: stopTime,
      runTimeDuration: stopTime - startTime
    });
    running = false;
  });
  server.on('error', function(err) {
    var stopTime = new Date();
    console.error('Server fatal error!', {
      err: err,
      startTime: startTime,
      stopTime: stopTime,
      runTimeDuration: stopTime - startTime
    });
    running = false;
  });
}

function stopServer() {
  if (server && running) {
    server.close();
  }
}
