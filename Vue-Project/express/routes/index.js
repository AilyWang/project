var express = require('express');
var router = express.Router();
var index  = require('../../mock/index.json');
var from   = require('../../mock/from.json')
var TestData = require("../../mock/test.json");

var productData=require("../../mock/qq.json");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
router.get("/D",(req,res)=>{
  res.json(productData);
})

/*  设置请求头  */
//设置跨域访问
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


router.get("/s",(req,res)=>{
  res.json(TestData);
})
module.exports = router;
