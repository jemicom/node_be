var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs')
/* GET home page. */
// localhost:4000
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'React Backend' });
  // res.send(fs.readFile('./views/index.html'))
  // res.sendFile( fs.readFile(path.join( '../views/index.html' )))
  res.sendFile(path.join(__dirname + '../views/index.html'))
});

module.exports = router;
