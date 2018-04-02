
var express = require('express');
var path = require('path');
var proxy = require('http-proxy-middleware');
 
var app = express();

// 从上往下依次命中

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.use(express.static(path.join(__dirname, 'public')));

// 如果这里写成/xxx 则会在/xxx 前面拼上 target 的内容 (target/xxx) 注意不是把/xxx 替换成了target
app.use('/', proxy({target: 'http://118.31.2.96/WeddingApp', changeOrigin: true}));

app.listen(3000);