var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminsRouter = require('./routes/admin');
var auth = require('./routes/auth');
var userMiddleware =require('./middlewares/userMiddleware');
var headerMiddleware =require('./middlewares/headerMiddleware');
var adminMiddleware =require('./middlewares/adminMiddleware');

var app = express();


dotenv.config();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')


app.use('/',headerMiddleware , indexRouter);
app.use('/auth', auth);
app.use('/users',userMiddleware, usersRouter);
app.use('/admin', adminMiddleware ,adminsRouter);


module.exports = app;
