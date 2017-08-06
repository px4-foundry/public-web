var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { 
  	title: 'Connected Earth Sciences'
  	,copyright:'2016 Connected Earth Sciences inc'
  	,slug : "Coastal Data"
  	,slug2: "Clean, Easy, Fast" 
  });
});

module.exports = router;
