const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
const userApi = require("./routes/userApi");

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

app.use("/api/user", userApi);

app.get("/api/profile", async (req, res) => {
  if (!req.userinfo) {
    return res.send(401);
  }

  return res.json(req.userinfo);
});

// Serving app from right path
app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(
      path.resolve(__dirname, "..", "..", "dist", "index.html")
    );
  }
  next();
});

app.listen(3000, () => {
  console.log("Started on http://localhost:3000");
});
