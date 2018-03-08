const io = require('socket.io-client');

function Socket(host) {

}

module.exports = function (host) {
  return new Socket(host);
};
