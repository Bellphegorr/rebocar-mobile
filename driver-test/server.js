const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
dotenv.config();
const port = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log("server started on port 5000");
});
