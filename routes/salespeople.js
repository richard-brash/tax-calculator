var express = require('express');
var router = express.Router();

const request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {


    var username = 'keyAuthorize';
    var password = 'MyK3yC0d3';
    var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');  
    const url = "https://rbm-tsp.azurewebsites.net/getstarted/salespeople";

    // var header = {'Host': 'www.example.com', 'Authorization': auth};
    // var request = client.request('GET', '/', header);

    request(
        {
            url: url,
            headers: {
                "Authorization": auth,
                'Content-Type': 'application/json'
            }
        },
        function(err, result, body) {
            res.json(JSON.parse(body));    
        }

    );
    
});

module.exports = router;
