var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var winston = require('winston');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var calculate = require('./routes/calculate');
var salespeople = require('./routes/salespeople');
var states = require('./routes/states');
var junk = require('./routes/junk');

// winston.loggers.add('default', {
//   console: {
//       colorize: 'true',
//       handleExceptions: true,
//       json: false,
//       level: 'silly',
//       label: 'default',
//   },
//   file: {
//       filename: 'temp/logs/taxcalculator/taxcalculator.log',
//       level: 'silly',
//       json: false,
//       handleExceptions: true,
//   },
// });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', index);
app.use('/api/calculate', calculate);
app.use('/api/salespeople', salespeople);
app.use('/api/states', states);
app.use('/api/junk', junk);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
