var express = require('express');
var router = express.Router();
const PDFDocument = require('pdfkit');


/* GET home page. */
router.get('/', function(req, res, next) {

    var pdfdocument = new PDFDocument();

    pdfdocument.text('wassup');

    pdfdocument.pipe(res);
    pdfdocument.end()    
    
});

module.exports = router;
