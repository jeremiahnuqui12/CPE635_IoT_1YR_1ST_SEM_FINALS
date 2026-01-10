// server.js
const { Server } = require("socket.io");

const io = new Server(3001, {
  cors: {
    origin: "*", // or specify your frontend URL
  }
});

io.on("connection", socket => {
  console.log("Client connected:", socket.id);

  socket.on("message", msg => {
    console.log("Received:", msg);
    socket.emit("reply", `Server received: ${msg}`);
  });

  socket.on("fan_status", status => {
    console.log("fan_status:", status);
    if (status == 1) {
      // START FAN

    } else {
      // CLOSE FAN

    }
  });

  socket.on("feeder_manual_trigger", () => {
    
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

console.log("Socket.IO standalone server running on port 3001");