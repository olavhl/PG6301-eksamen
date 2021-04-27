const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
const ws = require("ws");
const userApi = require("./routes/userApi");
const bodyParser = require("body-parser");

const app = express();
const discoveryURL =
  "https://accounts.google.com/.well-known/openid-configuration";

async function fetchJSON(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return await res.json();
}

// To authorize every "/api" call (or other call) in server
app.use(async (req, res, next) => {
  const Authorization = req.header("Authorization");
  if (Authorization) {
    const { userinfo_endpoint } = await fetchJSON(discoveryURL);
    req.userinfo = await fetchJSON(userinfo_endpoint, {
      headers: {
        Authorization,
      },
    });
  }
  next();
});

app.use(bodyParser.json());
// Serving app from right path
app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));
app.use("/api/user", userApi);

app.get("/api/profile", async (req, res) => {
  if (!req.userinfo) {
    return res.send(401);
  }

  return res.json(req.userinfo);
});

// Setting up WebSockets for chat
const sockets = [];
const wsServer = new ws.Server({ noServer: true });
wsServer.on("connection", (socket) => {
  sockets.push(socket);
  socket.on("message", (message) => {
    for (const socket of sockets) {
      socket.send("From server: " + message);
    }
  });
});

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(
      path.resolve(__dirname, "..", "..", "dist", "index.html")
    );
  }
  next();
});

const server = app.listen(3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);

  server.on("upgrade", (req, res, head) => {
    wsServer.handleUpgrade(req, res, head, (socket) => {
      wsServer.emit("connection", socket, req);
    });
  });
});
