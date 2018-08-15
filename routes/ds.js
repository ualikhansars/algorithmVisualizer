var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/main/dataStructures', {description: true});
});

router.get('/queue', function(req, res, next) {
  res.render('pages/elementaryDS/queue', {description: true});
});

router.get('/stack', function(req, res, next) {
  res.render('pages/elementaryDS/stack', {description: true});
});

router.get('/linkedList', function(req, res, next) {
  res.render('pages/elementaryDS/linkedList', {description: true});
});

module.exports = router;