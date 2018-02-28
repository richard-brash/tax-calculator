var express = require('express');
var router = express.Router();
var InfusionsoftApiClient = require('../lib/InfusionsoftApiClient');
var async = require("async");
const request = require('request');



/* GET home page. */
router.get('/', function (req, res, next) {

    var salespeople = [{Id:0,FirstName:"Not", LastName:"Applicable"}];
    InfusionsoftApiClient.Caller("TSP", "DataService.query", ['GroupAssign', 1000, 0, { 'GroupId': 10 }, ["UserId"]],
        function (error, data) {
            if (error) {
                res.json(error);
            } else {
                if (data) {

                    async.each(data,
                        function (userInRole, callback) {
                            InfusionsoftApiClient.Caller("TSP", "DataService.load", ['User', userInRole.UserId, ["Id", "FirstName", "LastName"]],

                                function (error, data) {
                                    if (!error) {
                                        var user = data;
                                        if (user.Id && user.FirstName && user.LastName) {
                                            salespeople.push(user);
                                        }
                                    }
                                    callback();
                                });
                        },
                        function (err) {
                            // All tasks are done now
                            res.json(salespeople);
                        }
                    );


                }

            }
        }
    );

});

module.exports = router;
