const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

let base = path.join(__dirname);

app.get("/", (req, res) => {
  res.sendFile(base + "/views/home.html");
});

app.get("/login", (req, res) => {
  res.sendFile(base + "/views/login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(base + "/views/signup.html");
});

app.listen(PORT, () => console.log("running on port 3000"));
