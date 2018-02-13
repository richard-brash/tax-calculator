var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({calculate:"this is a test"});
    
});

module.exports = router;
