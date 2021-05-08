const express = require('express')
const app = express()
const port = 8000

const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

io.on("connection", socket => { 
  console.log(socket.id);
 });

httpServer.listen(8080);