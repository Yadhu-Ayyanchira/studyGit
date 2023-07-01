const express = require('express')
const app = express()

app.use("/", (req,res) => {
    res.sendStatus(404)
});


app.listen(8000, function () {
  console.log("Server running at 8000");
});