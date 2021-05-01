//libraries
const express = require("express")
const app = express()
const path = require("path")

//global variable 
const ip = "localhost"
const port = 3000

//function
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html")
})

app.listen(port,ip, () => {
  console.log("[Let's Chat]--|listening at| --> http://" + ip + ":" + port)
})

