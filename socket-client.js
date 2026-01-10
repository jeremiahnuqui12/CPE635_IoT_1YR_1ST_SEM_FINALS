const { io } = require("socket.io-client");

const socket = io("http://localhost:3001", {
  reconnection: true,
  transports: ["websocket"]
});

socket.on("connect", () => {
  console.log("Socket client connected:", socket.id);
});

module.exports = socket;
