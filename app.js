var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./services/mongodb_connnections')
const errorHandler = require('./middlewares/http_error_handler')

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use(errorHandler())

process.on('uncaughtException', (err)=>{

})

process.on('unhandledReject', (reason, p)=>{

})

module.exports = app;
