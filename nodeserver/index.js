// Node server

const io = require("socket.io")(8000);

const Users = {};

io.on("connection", socket => {
    socket.on("new-user-joined", name => {
        Users[socket.id] = name;
        socket.broadcast.emit("user-joined",name)
    })

    socket.on("send",message => {
        socket.broadcast.emit("recieve",{message:message,name:Users[socket.id]})
    })
})