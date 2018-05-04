var express = require('express');
var router = express.Router();
var Config = require('../config');
var MakePDF = require('../lib/MakePDF');
var Calculator = require('../lib/Calculator');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({calculate:"this is a test"});
    
});

router.post('/', function(req, res, next) {

    var data = req.body;

    var result = {};
    result = Calculator.calculate(data);
    
    result.data = data;   

    var pdf = MakePDF.Make(result, function(pdf){
        result.pdf = pdf;
        res.json(result);
    });


//    MakePDF.openPdf(result,res);

});

module.exports = router;

