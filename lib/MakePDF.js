/**
 * Created by richardbrash on 10/21/15.
 */

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

}

module.exports = new MakePDF();