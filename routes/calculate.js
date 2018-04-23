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
    
    // var rates = Config.programConfig.filter(config => (
    //     (config.marriedFilingJointly == data._MarriedFilingJointly) &&
    //     (config.businessOwner == data._BusinessOwner)
    // ));

    // rates.forEach(rate => {
    //     var ti = data._TaxableIncome;
    //     if(eval(rate.eval)){
    //         program = rate;
    //     }
    // });    
    
    // MakePDF.openPdf(program, res);
    res.json(result);

});

module.exports = router;

