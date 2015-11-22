//Dependencies
var express = require('express');

//Modules

//Middleware

//Routers
var boardRoutes = require('./routes/board-routes');
var peopleRoutes = require('./routes/people-routes');
var projectRoutes = require('./routes/project-routes');

var app = express();
module.exports = app;

// --------- Begin health/redirect routes ---------
app.get('/', function(req, res) {
  res.status(301).redirect('/board/');
});

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