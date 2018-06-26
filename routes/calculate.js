var express = require('express');
var router = express.Router();

// var MakePDF = require('../lib/MakePDF');
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
    
    result.pdf = "Need to try creating the PDF on the client.";

    res.json(result);

    // var pdf = MakePDF.makeIt(result, function(pdf){

    //     result.pdf = pdf;

    //     CreateContact.createIt(result, function(){

    //     })  
        
    //     res.json(result);
    // });



    // var pdf = MakePDF.Make(result, function(pdf){
    //     result.pdf = pdf;
    //     res.json(result);
    // });


//    MakePDF.openPdf(result,res);

});

module.exports = router;

