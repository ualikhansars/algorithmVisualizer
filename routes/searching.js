var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pages/main/searchingAlgorithms', {});
});

router.get('/BFS', function(req, res, next) {
  let mode = req.query;
  res.render('pages/searching/BFS', {mode});
});

router.get('/DFS', function(req, res, next) {
  let mode = req.query;
  res.render('pages/searching/DFS', {mode});
});

router.get('/branchAndBound', function(req, res, next) {
  let mode = req.query;
  res.render('pages/searching/branchAndBound', {mode});
});

router.get('/hillClimbing', function(req, res, next) {
  let mode = req.query;
  res.render('pages/searching/hillClimbing', {mode});
});

router.get('/dijkstra', function(req, res, next) {
  let mode = req.query;
  res.render('pages/searching/dijkstra', {mode});
});

router.get('/optimal', function(req, res, next) {
  let mode = req.query;
  res.render('pages/searching/optimal', {mode});
});

router.get('/aStar', function(req, res, next) {
  let mode = req.query;
  res.render('pages/searching/aStar', {mode});
});

module.exports = router;