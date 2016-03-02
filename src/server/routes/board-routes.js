'use strict';

var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var indexHtmlPath = path.normalize(path.join(__dirname, '../../client/index.html'));

router.get('/', function (req, res) {
	return res.status(200).send("board route");
});

module.exports = router;