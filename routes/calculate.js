var express = require('express');
var router = express.Router();

var MakePDF = require('../lib/MakePDF');
var Calculator = require('../lib/Calculator');
var CreateContact = require('../lib/CreateContact');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({calculate:"this is a test"});
    
});

router.post('/', function(req, res, next) {

    var data = req.body;

    var result = {};
    result = Calculator.calculate(data);
    
    result.data = data;   

    var pdf = MakePDF.makeIt(result, function(pdf){

        result.pdf = pdf;

        CreateContact.createIt(result, function(){

        })  
        
        res.json(result);
    });

});

module.exports = router;

