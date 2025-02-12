const express = require('express');
const path = require('path')
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(express.static(path.join('/public')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("chat message", (msg) => {
        if (!msg) return; // Prevent sending undefined messages
        io.emit("message", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});


server.listen(9000)
