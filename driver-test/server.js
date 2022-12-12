const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const server = app.listen(5000, () => {
  console.log("server started on port 3000");
});
