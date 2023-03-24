var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var UserData = require('./routes/admin/UserRouter');


var UploadData = require('./routes/admin/UploadRouter');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// app.use((req, res, next) => {
//   //判断路径
//   if (req.path !== '/' && !req.path.includes('.')) {
//     res.set({
//       'Access-Control-Allow-Credentials': true, //允许后端发送cookie
//       'Access-Control-Allow-Origin': req.headers.origin || '*', //任意域名都可以访问,或者基于我请求头里面的域
//       'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type', //设置请求头格式和类型
//       'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',//允许支持的请求方式
//       'Content-Type': 'application/json; charset=utf-8'//默认与允许的文本格式json和编码格式
//     })
//   }
//   req.method === 'OPTIONS' ? res.status(204).end() : next()
// })

//我这边使用了中间件
var cors = require("cors");
app.use(cors());


// 支持文件上传
// const multer = require("multer");
// // app.use(multer({ dest: "/tmp/" }).array("avitar"));//上传支持
// var upload = multer({ dest: './upload/' });
// 引入express-fileuplod
var fileUpload = require('express-fileupload');
app.use(fileUpload());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 静态路径
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(UserData.UserRouter);
app.use(UserData.UserRouterRegister);
app.use(UserData.UserRouterAdd);
app.use(UserData.UserRouterList);
app.use(UserData.UserRouterListDelete);

app.use(UploadData.UploadFileRouter);

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
