const socketIO = require('socket.io');

function Socket(http) {
  const io = socketIO(http);
  io.on('connection', function (socket) {
    socket.on('send chat', function (data) {
      io.emit('receive chat', data);
    });
  });
}

module.exports = function (http) {
  return new Socket(http);
};
