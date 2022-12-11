const { io } = require("socket.io-client");

var socket = io.connect("http://localhost:3000");
socket.emit("join-driver", "driver1");

socket.on("requested-race", (data) => {
  setTimeout(() => {
    socket.emit("accept-race", { driverId: "driver1", raceId: data.id });
  }, 5000);
});

socket.on("get-location", ({ userId }) => {
  console.log("get-location", userId);
  socket.emit("send-location", {
    userId,
    latitude: -15.885358,
    longitude: -47.820909,
  });
});
