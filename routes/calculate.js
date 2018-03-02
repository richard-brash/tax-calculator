var express = require('express');
var router = express.Router();
var Config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({calculate:"this is a test"});
    
});

router.post('/', function(req, res, next) {

    var data = req.body;
    var program = {};

    var rates = Config.programConfig.filter(config => (
        (config.marriedFilingJointly == data._MarriedFilingJointly) &&
        (config.businessOwner == data._BusinessOwner)
    ));

    rates.forEach(rate => {
        var ti = data._TaxableIncome;
        if(eval(rate.eval)){
            program = rate;
        }
    });
    
    res.json(program);

});

module.exports = router;
