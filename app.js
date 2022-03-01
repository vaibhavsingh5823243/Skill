var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var app = express();

var courseRouter = require('./routes/course');
var instructorRouter = require('./routes/instructor');
var contactRouter = require('./routes/contactus');
var paymentRouter = require('./routes/payment');
var userRouter = require('./routes/authenticationApi');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//different-different router
app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/build/index.html");
})
app.use('/course',courseRouter);
app.use('/instructor',instructorRouter);
app.use('/payment', paymentRouter);
app.use('/contactus', contactRouter);
app.use('/authentication', userRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
