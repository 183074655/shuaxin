var express = require('express');
var router = express.Router();
var fs=require('fs')
var n=0;
/* GET home page. */
router.get('/', function(req, res, next) {
  n++;
  fs.writeFile("gqq.txt","你的页面访问次数："+n+"次",function(err){
    
  })
  fs.readFile("gqq.txt","utf-8",function(err,data){
    res.render('index',{asd:data})
  })
});

module.exports = router;
