//libraries
const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const s_io = require("socket.io");
//global variable 
const HOST = "localhost";
const PORT = 3000 || process.env.PORT;
const server = http.Server(app);
const io = s_io(server);  //socket.io instance
// express middleware
app.use(express.static('public'));
app.get("/", (req, res) => {
  //res.sendFile(__dirname + "/" + "index.html")
  res.sendFile(path.join(__dirname + "/public/index.html"));
})
io.on();
server.listen(PORT,HOST, () => {
  console.log("[Let's Chat]--|listening at| --> http://" + HOST + ":" + PORT)
})

