/**
 * Created by richardbrash on 10/21/15.
 */

var xmlrpc = require('xmlrpc');
var Config = require('../config');


var InfusionsoftApiClient = function(){

    this.Caller = function(appName, service, input, callback){

        var config = Config.ISConfig(appName);
        var client = xmlrpc.createSecureClient('https://' + config.AppName + '.infusionsoft.com/api/xmlrpc');

        var data = [config.ApiKey].concat(input);

        client.methodCall(service, data, function(error, value){
            if(!error){
                callback(null, value);

            } else {
                callback(error, null);
            }
        });

    }

}

module.exports = new InfusionsoftApiClient();