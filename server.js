//libraries
const express = require("express")
const app = express()
const path = require("path")
//global variable 
const host = "localhost"
const port = 3000

// express middleware
app.use(express.static('public'));
app.get("/", (req, res) => {
  //res.sendFile(__dirname + "/" + "index.html")
  res.sendFile(path.join(__dirname + "/public/index.html"));
})

app.listen(port,host, () => {
  console.log("[Let's Chat]--|listening at| --> http://" + host + ":" + port)
})

