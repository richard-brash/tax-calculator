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
        
        var inputTable = [];
        var object = data.data;
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                inputTable.push([ property, object[property]]);
            }
        }


        logger.errorLog.info('We are making a PDF...' + dt.toISOString().split('T')[0]);

        var pdfDoc = new PDFDocument();

        pdfDoc.on('pageAdded', function() {
            pdfDoc.font('Helvetica-Bold').text('Savings Estimate For: ' + data.data['FirstName'] + ' ' + data.data['LastName']);
            pdfDoc.font('Helvetica');        
            pdfDoc.moveDown();
            pdfDoc.moveDown();
        });


        // write to PDF
        pdfDoc.fontSize(10);
        pdfDoc.font('Helvetica-Bold').text('Savings Estimate For: ' + data.data['FirstName'] + ' ' + data.data['LastName']);
        pdfDoc.font('Helvetica');

        pdfDoc.moveDown();
        pdfDoc.moveDown();

        pdfDoc.font('Helvetica-Bold').text('Date: ' + dt.toISOString().split('T')[0], {align:'right'});

        var begin = pdfDoc.y;
        pdfDoc.moveDown();
        var end = pdfDoc.y;
        lineHi = end - begin;

        // pdfDoc.text('This line height is ' + lineHi);

        pdfDoc.font('Helvetica-Bold').text('Personal Information: ', {align:'left'});
        pdfDoc.font('Helvetica');

        var personalInformationData = [
            [ 'Name', data.data['FirstName'] + ' ' + data.data['LastName']],
            [ 'State', data.data['State']],
          //   [ 'Contact No', data.data['ContactId']],
            [ 'Email', data.data['Email']],
          //   [ 'Sales Person', data.data['_SalePerson']]
          ];

        this.drawTable(pdfDoc,personalInformationData, lineHi);

        pdfDoc.font('Helvetica-Bold').text('Tax Saving Estimate:', {align:'left'});
        pdfDoc.font('Helvetica');

        var estimate = [
            [ 'Line Item', 'Original', 'Low-end', 'High-end'],
            [ 'AGI', currencyFormatter.format(data.original.AGI, { code: 'USD' }), currencyFormatter.format(data.lowEnd.AGI, { code: 'USD' }), currencyFormatter.format(data.highEnd.AGI, { code: 'USD' }) ],
            [ 'Scorecard', '', currencyFormatter.format(data.lowEnd.Scorecard, { code: 'USD' }), currencyFormatter.format(data.highEnd.Scorecard, { code: 'USD' }) ],
            [ 'Revised AGI', '', currencyFormatter.format(data.lowEnd.RevisedAGI, { code: 'USD' }), currencyFormatter.format(data.highEnd.RevisedAGI, { code: 'USD' }) ],
            [ 'Itemized Deductions', currencyFormatter.format(data.original.ItemizedDeductions, { code: 'USD' }), currencyFormatter.format(data.lowEnd.ItemizedDeductions, { code: 'USD' }), currencyFormatter.format(data.highEnd.ItemizedDeductions, { code: 'USD' }) ],
            [ 'GPP', '', currencyFormatter.format(data.lowEnd.GPP, { code: 'USD' }), currencyFormatter.format(data.highEnd.GPP, { code: 'USD' }) ],
            [ 'Revised Itemized Ded', '', currencyFormatter.format(data.lowEnd.RevisedItemizedDeductions, { code: 'USD' }), currencyFormatter.format(data.highEnd.RevisedItemizedDeductions, { code: 'USD' }) ],
            [ 'Taxable Income', currencyFormatter.format(data.original.TaxableIncome, { code: 'USD' }), currencyFormatter.format(data.lowEnd.TaxableIncome, { code: 'USD' }), currencyFormatter.format(data.highEnd.TaxableIncome, { code: 'USD' }) ],
            [ '20% QBI Deduction', currencyFormatter.format(data.original.QBIDeduction, { code: 'USD' }), currencyFormatter.format(data.lowEnd.QBIDeduction, { code: 'USD' }), currencyFormatter.format(data.highEnd.QBIDeduction, { code: 'USD' }) ],
            [ 'Revisesd Taxable Income', currencyFormatter.format(data.original.RevisedTaxableIncome, { code: 'USD' }), currencyFormatter.format(data.lowEnd.RevisedTaxableIncome, { code: 'USD' }), currencyFormatter.format(data.highEnd.RevisedTaxableIncome, { code: 'USD' }) ],
            [ 'Tax Forcast', currencyFormatter.format(data.original.TaxForecast, { code: 'USD' }), currencyFormatter.format(data.lowEnd.TaxForecast, { code: 'USD' }), currencyFormatter.format(data.highEnd.TaxForecast, { code: 'USD' }) ],

            [ '', 'Annual Savings',  currencyFormatter.format(data.lowEnd.AnnualSavings, { code: 'USD' }), currencyFormatter.format(data.highEnd.AnnualSavings, { code: 'USD' }) ],
            [ '', 'GPP Funding',  currencyFormatter.format(data.lowEnd.GPPFunding, { code: 'USD' }), currencyFormatter.format(data.highEnd.GPPFunding, { code: 'USD' }) ],
            [ '', 'Guarantee Discount',  currencyFormatter.format(data.lowEnd.AnnualFederalSavings, { code: 'USD' }), currencyFormatter.format(data.highEnd.AnnualFederalSavings, { code: 'USD' }) ],
          ];

          this.drawTable(pdfDoc,estimate, lineHi);

          
          pdfDoc.addPage(); 
          pdfDoc.font('Helvetica-Bold').text('Input Questions:');
          pdfDoc.font('Helvetica');
          this.drawTable(pdfDoc,inputTable, lineHi);




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


    this.writeRow = function(pdfDoc, rowPosition, dataArray){
        var columns = dataArray.length;
        var column = 50;
        for(x=0; x<columns; x++){    
            pdfDoc.text(dataArray[x], column, rowPosition);
            column += 140;
        }
    }

    this.drawTable = function(pdfDoc, tableData, lineHi){
        
        var beginY = pdfDoc.y - 2;

        console.log('' + pdfDoc.y);
        pdfDoc.moveDown();

        for(var row = 0; row < tableData.length; row++){
            this.writeRow(pdfDoc, pdfDoc.y, tableData[row]);
            // console.log(pdfDoc.y);
        }

        pdfDoc.rect(40, beginY, 510, (tableData.length*lineHi) + 15 ).stroke();   

        pdfDoc.moveDown();
        pdfDoc.moveDown();
        pdfDoc.x = 72;
  
    }

}

module.exports = new MakePDF();