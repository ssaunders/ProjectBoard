'use strict';

var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var indexHtmlPath = path.normalize(path.join(__dirname, '../../client/index.html'));

router.get('/', getIndex);

function getIndex(req, res) {
  fs.readFile(indexHtmlPath, {
    encoding: 'utf8'
  }, function (err, contents) {
    if (err) {
      return res.status(500).send({
        'error': 'Error loading index.html'
      });
    }
    res.send(contents);
  });
}


// function log(req, res) {
//   var type = req.body.type || 'log',
//     message = JSON.stringify(req.body.value || req.body),
//     clientLog = {
//       fromClient: true
//     };
//   switch (type) {
//     case 'log':
//       req.log.log(message, clientLog);
//       break;
//     case 'warn':
//       req.log.warn(message, clientLog);
//       break;
//     case 'info':
//       req.log.info(message, clientLog);
//       break;
//     case 'error':
//       req.log.error(message, clientLog);
//       break;
//   }
//   res.status(200).end();
// }


// function logTimings(req, res) {
//   var times = {
//     containerId: req.body.containerId,
//     loadJS: parseInt(req.body.loadJS, 10) || null,
//     loadReport: parseInt(req.body.loadReport, 10) || null,
//     loadWidgets: parseInt(req.body.loadWidgets, 10) || null,
//     loadSampleData: parseInt(req.body.loadSampleData, 10) || null,
//     loadFullData: parseInt(req.body.loadFullData, 10) || null,
//     total: parseInt(req.body.total, 10) || null
//   };

//   req.log.info(times, 'firstPageLoad');
//   res.status(200).end();
// }

module.exports = router;

