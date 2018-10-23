var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/courses', function(req, res, next) {
  res.render('courses');
});

router.get('/courses', function(req, res, next) {
  res.render('courses');
});

router.get('/experience', function(req, res, next) {
  res.render('exp');
});


router.get('/grants', function(req, res, next) {
  res.render('grants');
});

router.get('/savoy', function(req, res, next) {
  res.render('savoy');
});

router.get('/blog', function(req, res, next) {
  res.render('blog');
});

router.get('/blog2', function(req, res, next) {
  res.render('blog2');
});

router.get('/cdemo', function(req, res, next) {
  res.render('cdemo');
});





module.exports = router;
