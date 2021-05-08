const express = require('express')
const app = express()

const fs = require("fs");
const httpServer = require("https").createServer({
  key: fs.readFileSync("/tmp/key.pem"),
  cert: fs.readFileSync("/tmp/cert.pem")
});

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", socket => { /* ... */ });

httpServer.listen(3000);