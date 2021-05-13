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
const users={};
// express middleware
app.use(express.static('public'));
app.get("/", (req, res) => {
  //res.sendFile(__dirname + "/" + "index.html")
  res.sendFile(path.join(__dirname + "/public/index.html"));
})
io.on("connection", (socket)=>{
  socket.on("new-user", (username)=>{
    users[socket.id]=username;
    socket.broadcast.emit("user-connected", username);
  });
  //receive msg from client
  socket.on("send-chat-msg", (msg)=>{
    //console.log(msg);
    //broadcast to all connected users
    socket.broadcast.emit("chat-msg", {msg:msg, username:users[socket.id]});
  });
  socket.on("disconnect", ()=>{
    socket.broadcast.emit("user-disconnected", users[socket.id]);
    delete users[socket.id];
  });
});
server.listen(PORT,HOST, () => {
  console.log("[Let's Chat]--|listening at| --> http://" + HOST + ":" + PORT)
})

