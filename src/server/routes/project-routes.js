'use strict';

var express = require('express');
var router = express.Router();
var dbSvc = require('./../services/databaseService');

router.get('/:projectId', function(req, res) {
  dbSvc.getProject(req.params.projectId)
    .then(function(project) {
      console.log("project:",project)
      res.status(200).json(project);
    })
    .catch(function(err) {
      console.log("Failed to get all projects: ", err.message);
    });
});

router.get('/', function(req, res) {
  dbSvc.getAllProjects()
    .then(function(projects) {
      console.log("projects:",projects)
      res.status(200).json(projects);
    })
    .catch(function(err) {
      console.log("Failed to get all projects: ", err.message);
    });
});

module.exports = router;