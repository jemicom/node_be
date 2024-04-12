var express = require('express');
var router = express.Router();

/* GET home page. */
// localhost:4000
router.get('/', function(req, res, next) {
  res.render('index', { title: 'React Backend' });
  // res.send(fs.readFile('./views/index.html'))
});

module.exports = router;
