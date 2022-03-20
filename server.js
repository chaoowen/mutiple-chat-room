
// ex. 建立 http 的連線
// const http = require('http')
// const app = require('express')()
// app.listen(9090)
// app.get('/',function(req, res){
//     res.send('ohoh welcome')
// })


// 建立 socket.io 的連線
// const http = require('http').createServer()
const http = require('http').createServer(function (req, res) {
  if (req.url === '/') {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><body>This is Home Page.</body></html>');
    res.end();
  }
})
var io = require('socket.io')(http);
http.listen(9090)
console.log("Server socket 9090 , api 9050")
 
// 建立 http 的 api 連線
var app = require('express')();
var port = 9050;
app.listen(port, function(){
  console.log('API listening on *:' + port);
});
 
app.get('/',function(req, res){
  res.send('ohoh hihi welcome')
})

// 使用者連線上socket後的監聽
io.on('connection', function(socket){
  console.log('concected')
})