// 1. router 路由
// 2. models 模型
// 3. controllers 控制器
// 4. views 視圖
// MVC

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');
const mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb+srv://kelvin80121:iEK0Zh2uWzgUnNLK@cluster0.x7cwh1p.mongodb.net/')
    .then(res=> console.log("連線資料成功"));


    
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

module.exports = app;
