var express = require('express');
var router = express.Router();
var ShopProductData=require("../../mock/shopCartProductList.json")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
