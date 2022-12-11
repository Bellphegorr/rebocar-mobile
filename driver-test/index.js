const { io } = require("socket.io-client");

var socket = io.connect("http://localhost:3000");
socket.emit("join-driver", "driver1");

socket.on("requested-race", (data) => {
  socket.emit("accept-race", { driverId: "driver1", raceId: data.id });
});

socket.on("get-location", (callback) => {
  console.log("get-location");
  callback({ lat: 1, lng: 1 });
});
