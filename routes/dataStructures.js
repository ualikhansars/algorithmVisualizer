var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/main/dataStructures', {});
});

router.get('/queue', function(req, res, next) {
  let mode = req.query;
  res.render('pages/elementaryDS/queue', {mode});
});

router.get('/stack', function(req, res, next) {
  let mode = req.query;
  res.render('pages/elementaryDS/stack', {mode});
});

router.get('/linkedList', function(req, res, next) {
  let mode = req.query;
  res.render('pages/elementaryDS/linkedList', {mode});
});

router.get('/binarySearchTree', function(req, res, next) {
  let mode = req.query;
  res.render('pages/trees/binarySearchTree', {mode});
});

router.get('/graph', function(req, res, next) {
  let mode = req.query;
  res.render('pages/graphs/graph', {mode});
});

module.exports = router;