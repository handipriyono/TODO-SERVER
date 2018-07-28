var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('index todofancy HANDI')
})
module.exports = router;
