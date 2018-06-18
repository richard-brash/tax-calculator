/**
 * Created by richardbrash on 10/21/15.
 */

var Config = require('../config');
var InfusionsoftApiClient = require('../lib/InfusionsoftApiClient');

var CreateContact = function(){

    this.createIt = function(data, callback){

        var contact = {
            FirstName: data.data.FirstName,
            LastName: data.data.LastName,
            Email: data.data.Email,
            Phone1: data.data.Phone1,
            State: data.data.State,
        }
        InfusionsoftApiClient.Caller(data.company,"ContactService.addWithDupCheck", [contact, "Email"], function(error, contactId){
            console.log(contactId);

            if(!error){
                InfusionsoftApiClient.Caller(data.company,"FileService.uploadFile", [contactId, "Lets Get Started.pdf", data.pdf], function(error, result){
                    console.log(result);
                });    
            }
        });



    }



}

module.exports = new CreateContact();