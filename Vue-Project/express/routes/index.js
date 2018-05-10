var express = require('express');
var router = express.Router();
var index  = require('../../mock/index.json');
var from   = require('../../mock/from.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*  设置请求头  */
router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
router.get('/index', function(req, res, next) {
  res.json(index);
});
router.get('/from', function(req, res, next) {
  res.json(from);
});


module.exports = router;
