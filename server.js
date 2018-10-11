const express = require("express");
const app = express();
const methodOverride = require("method-override");
const pokemonController = require("./controllers/pokemon");
const bodyParser = require("body-parser");
const Pokemon = require("./models/pokemon");

const port = 3000;

// Middle Ware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use("/pokemon", pokemonController)





app.listen(port, function() {
    console.log("App is running on port: ", port);
  });

module.exports = app;