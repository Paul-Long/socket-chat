function socket(http) {
  const io = require('socket.io')(http);
  io.on('connection', function (socket) {
    socket.on('add channel', function (user) {

    });
    socket.on('quit channel', function (user) {

    });
    socket.on('send chat', function (data) {
      io.emit('receive chat', data);
    });
    socket.on('receive chat', function (data) {

    });
    socket.on('disconnect', function () {

    });
  });
}

module.exports = socket;
