/**
 * Created by richardbrash on 10/21/15.
 */

const PDFDocument = require('pdfkit');
const base64 = require('base64-stream');

var currencyFormatter = require('currency-formatter');

var logger = require('../lib/logger');

var MakePDF = function(){

    this.makeIt = function(data, callback){


        var dt = new Date();
        
        logger.errorLog.info('We are making a PDF...' + dt.toISOString().split('T')[0]);

        var pdfDoc = new PDFDocument();

        logger.errorLog.info('We created the pdfDoc from the document definition -- createPdfKitDocument(dd);');

        var chunks = [];
        var result;
      
 
        // write to PDF
        pdfDoc.text("This is a TEST line 1");
        pdfDoc.text("This is a TEST line 2");
        pdfDoc.text("This is a TEST line 3");
        pdfDoc.text("This is a TEST line 4");
        pdfDoc.text("This is a TEST line 5");


        var finalString = ''; // contains the base64 string
        var stream = pdfDoc.pipe(base64.encode());

        pdfDoc.end(); // will trigger the stream to end

        stream.on('data', function(chunk) {
            finalString += chunk;
        });

        stream.on('end', function() {
            // the stream is at its end, so push the resulting base64 string to the callback
            callback(finalString);
            logger.errorLog.info('Called back');            
        });


    }

}

module.exports = new MakePDF();