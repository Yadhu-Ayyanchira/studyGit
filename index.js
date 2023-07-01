const express = require('express')
const app = express()

app.get("/", (req,res) => {
    res.sendStatus(404)
});

app.get("/found", (req, res) => {
  res.sendStatus(200);
});

app.listen(8000, function () {
  console.log("Server running at 8000");
});