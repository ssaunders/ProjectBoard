//Dependencies
var express = require('express');

//  Modules
// var accessLogger = require('./logging/access-logger');

// Middleware
// var authentication = require('./middleware/authentication'),
//   cookieParser = require('cookie-parser'),
//   bodyParser = require('body-parser');
// var authorization = require('./middleware/authorization');

//Routers
var boardRoutes = require('./routes/board-routes');
var peopleRoutes = require('./routes/people-routes');
var projectRoutes = require('./routes/project-routes');
var appRoutes = require('./routes/app-routes');

var app = express();

// --------- Begin static routes ---------
app.use('/static', express.static(__dirname + '/../vendor'));
app.use('/client', express.static(__dirname + '/../client'));

// if (qhostname.indexOf('dev') !== -1) {
//   app.use('/board/public/vendor', express.static(__dirname + '/../vendor'));
// }
// --------- End static routes ---------

// --------- Begin health/redirect routes ---------
// app.get('/', function(req, res) {
//   res.status(301).redirect('/board/');
// });

app.get('/board/status', function(req, res) {
  res.status(200).set('Content-Type', 'text/plain').send('OK');
});
// --------- End health/redirect routes ---------


// --------- Begin logging ---------
// --------- End logging ---------

// --------- Begin middleware ---------
// --------- End middleware ---------



app.use('/board', boardRoutes);
// app.use('/people', peopleRoutes);
// app.use('/projects', projectRoutes);
app.use('/', appRoutes);

// --------- Begin global error handler ---------
app.use(function(err, req, res, next) {

  if (err) {
    err.uncaught = true;
    if (err.code === 'DONTKNOWWHATHAPD') {
      err.requestUrl = req.originalUrl;
      console.warn(err);
    } else {
      console.error(err);
    }
  }

  if (err && err.statusCode) {
    res.status(err.statusCode).send(err.toString());
  } else {
    res.status(500).send('Internal Error');
  }
  next(err);
});

module.exports = app;