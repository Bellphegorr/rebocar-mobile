const { io } = require("socket.io-client");

var socket = io.connect("http://localhost:3000");
socket.emit("join-driver", "driver2");

socket.on("requested-race", (data) => {
  socket.emit("accept-race", { driverId: "driver2", raceId: data.id });
});

socket.on("get-location", (callback) => {
  console.log("get-location");
  callback({ lat: 1, lng: 1 });
});

setTimeout(() => {
  socket.emit("get-location", { userIdRequested: "driver1" }, (data) => {
    console.log("dado do back", JSON.stringify(data));
  });
}, 2000);
