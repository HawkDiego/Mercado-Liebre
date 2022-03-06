const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
let base = path.join(__dirname);

app.get('/', (req, res) => {
    res.sendFile(base + '/views/home.html')
});









app.listen(3000, () => {
  console.log("Server ON");
});
