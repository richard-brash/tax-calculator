/**
 * Created by richardbrash on 10/21/15.
 */

const PDFDocument = require('pdfkit');
const base64 = require('base64-stream');


var MakePDF = function(){

    this.openPdf = function(data, response){

        var pdfdocument = new PDFDocument();

        pdfdocument.text('wassup');



        pdfdocument.pipe(response);
        pdfdocument.end()

    }


    this.Make = function(data){

        var doc = new PDFDocument();        
        var finalString = ''; // contains the base64 string
        var stream = doc.pipe(base64.encode());
        
        // add your content to the document here
        




        doc.end();
        
        stream.on('data', function(chunk) {
            finalString += chunk;
        });
        
        stream.on('end', function() {

            // the stream is at its end, so push the resulting base64 string to the response
            // res.json(finalString);



            return finalString;
        });
    }

}

module.exports = new MakePDF();