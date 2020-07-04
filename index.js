const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const { ERDEngine } = require("vuerd/dist/vuerd-engine.cjs");

const erd = new ERDEngine();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("connection");

  socket.on("vuerd.init", () => {
    socket.emit("vuerd.init", erd.value);
  });

  socket.on("vuerd.share", (commands) => {
    // merge data
    erd.sharePush(commands);

    io.emit("vuerd.share", commands);
  });

  socket.on("disconnect", () => {
    console.log("disconnect");

    // save erd data
    const erdData = erd.value;
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
