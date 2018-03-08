const io = require('socket.io-client');

function Socket(host) {
  const socket = io(host || window.location.origin);
}

Socket.prototype.subscribe = function (channel) {

};

module.exports = function (host) {
  return new Socket(host);
};
