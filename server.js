const express = require("express");
const app = express();

const Pokemon = require("./models/pokemon");

const port = 3000;

app.get("/pokemon", (req, res) => {
    res.send(Pokemon);
})



app.listen(port, function() {
    console.log("App is running on port: ", port);
  });