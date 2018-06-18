/**
 * Created by richardbrash on 10/21/15.
 */

const PDFDocument = require('pdfkit');
const PdfPrinter = require('pdfmake');

const fonts = {
	Roboto: {
		normal: 'routes/fonts/Roboto-Regular.ttf',
		bold: 'routes/fonts/Roboto-Medium.ttf',
		italics: 'routes/fonts/Roboto-Italic.ttf',
		bolditalics: 'routes/fonts/Roboto-Italic.ttf',
	},
};
const printer = new PdfPrinter(fonts);

const base64 = require('base64-stream');
var currencyFormatter = require('currency-formatter');

var MakePDF = function(){

    this.makeIt = function(data, callback){

        var inputTable = [];
        var object = data.data;
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                inputTable.push([ property, object[property]]);
            }
        }



        var dt = new Date();

        var dd = {
            content: [
                {text:'Date: ' + dt.toISOString().split('T')[0], style:'dte'},
                {text:'Personal Information:', style:'subheader'},
                {text:' '},
                {table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
            
                    body: [
                      [ 'Name', data.data['FirstName'] + ' ' + data.data['LastName']],
                      [ 'State', data.data['State']],
                    //   [ 'Contact No', data.data['ContactId']],
                      [ 'Email', data.data['Email']],
                    //   [ 'Sales Person', data.data['_SalePerson']]
                    ]
                  }},
                  {text:' '},
                  {text:' '},
                  {text:'Tax Saving Estimate:', style:'subheader'},
                  {text:' '},

                  {table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
            
                    body: [
                      [ 'Line Item', 'Original', 'Low-end', 'High-end'],
                      [ 'AGI', currencyFormatter.format(data.original.AGI, { code: 'USD' }), currencyFormatter.format(data.lowEnd.AGI, { code: 'USD' }), currencyFormatter.format(data.highEnd.AGI, { code: 'USD' }) ],
                      [ 'Scorecard', '', currencyFormatter.format(data.lowEnd.Scorecard, { code: 'USD' }), currencyFormatter.format(data.highEnd.Scorecard, { code: 'USD' }) ],
                      [ 'Revised AGI', '', currencyFormatter.format(data.lowEnd.RevisedAGI, { code: 'USD' }), currencyFormatter.format(data.highEnd.RevisedAGI, { code: 'USD' }) ],
                      [ 'Itemized Deductions', currencyFormatter.format(data.original.ItemizedDeductions, { code: 'USD' }), currencyFormatter.format(data.lowEnd.ItemizedDeductions, { code: 'USD' }), currencyFormatter.format(data.highEnd.ItemizedDeductions, { code: 'USD' }) ],
                      [ 'GPP', '', currencyFormatter.format(data.lowEnd.GPP, { code: 'USD' }), currencyFormatter.format(data.highEnd.GPP, { code: 'USD' }) ],
                      [ 'Revised Itemized Deductions', '', currencyFormatter.format(data.lowEnd.RevisedItemizedDeductions, { code: 'USD' }), currencyFormatter.format(data.highEnd.RevisedItemizedDeductions, { code: 'USD' }) ],
                      [ 'Taxable Income', currencyFormatter.format(data.original.TaxableIncome, { code: 'USD' }), currencyFormatter.format(data.lowEnd.TaxableIncome, { code: 'USD' }), currencyFormatter.format(data.highEnd.TaxableIncome, { code: 'USD' }) ],
                      [ '20% QBI Deduction', currencyFormatter.format(data.original.QBIDeduction, { code: 'USD' }), currencyFormatter.format(data.lowEnd.QBIDeduction, { code: 'USD' }), currencyFormatter.format(data.highEnd.QBIDeduction, { code: 'USD' }) ],
                      [ 'Revisesd Taxable Income', currencyFormatter.format(data.original.RevisedTaxableIncome, { code: 'USD' }), currencyFormatter.format(data.lowEnd.RevisedTaxableIncome, { code: 'USD' }), currencyFormatter.format(data.highEnd.RevisedTaxableIncome, { code: 'USD' }) ],
                      [ 'Tax Forcast', currencyFormatter.format(data.original.TaxForecast, { code: 'USD' }), currencyFormatter.format(data.lowEnd.TaxForecast, { code: 'USD' }), currencyFormatter.format(data.highEnd.TaxForecast, { code: 'USD' }) ],

                      [ '', 'Annual Savings',  currencyFormatter.format(data.lowEnd.AnnualSavings, { code: 'USD' }), currencyFormatter.format(data.highEnd.AnnualSavings, { code: 'USD' }) ],
                      [ '', 'GPP Funding',  currencyFormatter.format(data.lowEnd.GPPFunding, { code: 'USD' }), currencyFormatter.format(data.highEnd.GPPFunding, { code: 'USD' }) ],
                      [ '', 'Guarantee Discount',  currencyFormatter.format(data.lowEnd.AnnualFederalSavings, { code: 'USD' }), currencyFormatter.format(data.highEnd.AnnualFederalSavings, { code: 'USD' }) ],
                    ]
                  }},
                  {text:' '},
                  {text:' '},
                  {text:'Input Questions:', style:'subheader'},
                  {text:' '},
                  {table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
            
                    body: inputTable
                  }},

            ],
            styles: {
                dte: {
                    fontSize: 14,
                    bold: true,
                    alignment: 'right'
                },
                subheader: {
                    fontSize: 14,
                    bold: true
                },
            }            
            
        }

        var pdfDoc = printer.createPdfKitDocument(dd);


        var chunks = [];
        var result;
      
        pdfDoc.on('data', function (chunk) {
          chunks.push(chunk);
        });

        pdfDoc.on('end', function () {
          result = Buffer.concat(chunks);
          callback(result.toString('base64'));
        });
        
        pdfDoc.end();


    }

    this.Make = function(data, callback){

        var doc = new PDFDocument();        
        var finalString = ''; // contains the base64 string
        var stream = doc.pipe(base64.encode());
        
        doc.text('20% QBI', {align:'left', continued:true});
        doc.text(currencyFormatter.format(data.original.QBIDeduction, { code: 'USD' }), {align:'center', continued:true});
        doc.text(currencyFormatter.format(data.lowEnd.QBIDeduction, { code: 'USD' }) + ' -> ' + currencyFormatter.format(data.highEnd.QBIDeduction, { code: 'USD' }), {align:'right'});

        doc.text('Revised Taxable Income', {align:'left', continued:true});
        doc.text(currencyFormatter.format(data.original.RevisedTaxableIncome, { code: 'USD' }), {align:'center', continued:true});
        doc.text(currencyFormatter.format(data.lowEnd.RevisedTaxableIncome, { code: 'USD' }) + ' -> ' + currencyFormatter.format(data.highEnd.RevisedTaxableIncome, { code: 'USD' }), {align:'right'});

        doc.text('Tax Forcast', {align:'left', continued:true});
        doc.text(currencyFormatter.format(data.original.TaxForecast, { code: 'USD' }), {align:'center', continued:true});
        doc.text(currencyFormatter.format(data.lowEnd.TaxForecast, { code: 'USD' }) + ' -> ' + currencyFormatter.format(data.highEnd.TaxForecast, { code: 'USD' }), {align:'right'});



        doc.text('Original Tax Forecast', {align:'left', continued:true});
        doc.text(currencyFormatter.format(data.original.TaxForecast, { code: 'USD' }), {align:'center', continued:true});
        doc.text(' ', {align:'right'});


        doc.text('Revised Tax Forecast', {align:'left', continued:true});
        doc.text(currencyFormatter.format(data.lowEnd.TaxForecast, { code: 'USD' }), {align:'center', continued:true});
        doc.text(currencyFormatter.format(data.highEnd.TaxForecast, { code: 'USD' }), {align:'right'});



        doc.text('Annual Reduction in Taxes', {align:'left', continued:true});
        doc.text(currencyFormatter.format(data.lowEnd.AnnualSavings, { code: 'USD' }),  {align:'center', continued:true});
        doc.text(currencyFormatter.format(data.highEnd.AnnualSavings, { code: 'USD' }), {align:'right'});



        // doc.text('Tax Saving Estimate');
        // var object = data.data;
        // for (var property in object) {
        //     if (object.hasOwnProperty(property)) {
        //         doc.text(property + ': ' + object[property]);
        //     }
        // }

        // doc.text('ORIGINAL TAX FORECAST');
        // object = data.original;
        // for (var property in object) {
        //     if (object.hasOwnProperty(property)) {
        //         doc.text(property + ': ' + object[property]);
        //     }
        // }

        // doc.text('HIGH END TAX FORECAST');
        // object = data.highEnd;
        // for (var property in object) {
        //     if (object.hasOwnProperty(property)) {
        //         doc.text(property + ': ' + object[property]);
        //     }
        // }
        

        // doc.text('LOW END TAX FORECAST');
        // object = data.lowEnd;
        // for (var property in object) {
        //     if (object.hasOwnProperty(property)) {
        //         doc.text(property + ': ' + object[property]);
        //     }
        // }

        doc.moveDown();

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