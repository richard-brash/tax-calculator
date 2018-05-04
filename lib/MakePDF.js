/**
 * Created by richardbrash on 10/21/15.
 */

const PDFDocument = require('pdfkit');
const base64 = require('base64-stream');


var MakePDF = function(){

    this.openPdf = function(data, response){

        var doc = new PDFDocument();

        doc.text('INPUT DATA');
        var object = data.data;
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                doc.text(property + ': ' + object[property]);
            }
        }
        doc.text('ORIGINAL TAX FORECAST');
        object = data.original;
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                doc.text(property + ': ' + object[property]);
            }
        }

        doc.text('HIGH END TAX FORECAST');
        object = data.highEnd;
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                doc.text(property + ': ' + object[property]);
            }
        }
        

        doc.text('LOW END TAX FORECAST');
        object = data.lowEnd;
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                doc.text(property + ': ' + object[property]);
            }
        }

        doc.text('INFUSIONSOFT TRIGGER DATA');
        doc.text('program' + ': ' + data['program']);
        doc.text('company' + ': ' + data['company']);
        doc.text('businessOwner' + ': ' + data['businessOwner']);
        doc.text('marriedFileJointly' + ': ' + data['marriedFileJointly']);





        doc.pipe(response);
        doc.end()

    }

    this.Make = function(data, callback){

        var doc = new PDFDocument();        
        var finalString = ''; // contains the base64 string
        var stream = doc.pipe(base64.encode());
        
        // add your content to the document here
        
        doc.text('INPUT DATA');
        var object = data.data;
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                doc.text(property + ': ' + object[property]);
            }
        }
        doc.text('ORIGINAL TAX FORECAST');
        object = data.original;
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                doc.text(property + ': ' + object[property]);
            }
        }

        doc.text('HIGH END TAX FORECAST');
        object = data.highEnd;
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                doc.text(property + ': ' + object[property]);
            }
        }
        

        doc.text('LOW END TAX FORECAST');
        object = data.lowEnd;
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                doc.text(property + ': ' + object[property]);
            }
        }

        doc.text('INFUSIONSOFT TRIGGER DATA');
        doc.text('program' + ': ' + data['program']);
        doc.text('company' + ': ' + data['company']);
        doc.text('businessOwner' + ': ' + data['businessOwner']);
        doc.text('marriedFileJointly' + ': ' + data['marriedFileJointly']);


        doc.end();
        
        stream.on('data', function(chunk) {
            finalString += chunk;
        });
        
        stream.on('end', function() {

            // the stream is at its end, so push the resulting base64 string to the response
            // res.json(finalString);

            callback(finalString);
        });
    }

}

module.exports = new MakePDF();