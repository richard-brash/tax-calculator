var winston = require('winston');
var path = require('path');

// Set this to whatever, by default the path of the script.
var logPath = __dirname;

const tsFormat = () => (new Date().toISOString());


const errorLog = winston.loggers.add('default',{
    transports: [
        new winston.transports.File({
            filename: path.join(logPath, 'taxcalculator.log'), 
            timestamp: tsFormat,           
            level: 'info'})
    ]
});

// const accessLog = new (winston.Logger)({
//     transports: [
//         new winston.transports.File({
//             filename: path.join(logPath, 'access.log'),
//             timestamp: tsFormat,
//             level: 'info'})
//     ]
// });   

module.exports = {
    errorLog: errorLog,
    // accessLog: accessLog
};