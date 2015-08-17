// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
//var io = require('../..')(server);
var io = require('socket.io')(server);
//var io = require('socket.io').listen(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {

  // 构造客户端对象
  var client = {
    socket: socket,
    username: '',
    color: ''
  }

  //socket.emit('open');//通知客户端已连接

  // 打印握手信息
  //console.log(socket.handshake);

  // when the client emits 'add user', this listens and executes
  socket.on('add user', function (username) {
    // we store the username in the socket session for this client
    client.username = username;
    socket.broadcast.emit('add user', {username: client.username, message: 'haha'});
  });
});