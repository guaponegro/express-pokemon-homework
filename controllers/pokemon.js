const express = require("express");
const router = express.Router();
const Pokemon = require("../models/pokemon");




// Index Route
router.get("/", (req, res) => {
    res.render("index.ejs", {pokemon: Pokemon});
});

// Delete Route
router.delete("/:id/delete", (req, res) => {
    Pokemon.splice([req.params.id], 1);
    res.redirect("/pokemon");
})

// Edit Route
router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemon: Pokemon[req.params.id],
        id: req.params.id
    });
});

// Route to Put Edited Info Back Onto Browser
router.put("/:id", (req, res) => {
    Pokemon[req.params.id] = req.body;
    res.redirect("/pokemon")
});

// Create New Route
router.get("/new", (req, res) => {
    res.render("new.ejs", {pokemon: Pokemon})
})

// Route to put New Pokemon Back Onto Browser
router.put("/new/create", (req, res) => {
    Pokemon.push(req.body);
    res.redirect("/pokemon")
})

// Show Route
router.get("/:id/show", (req, res) => {
    res.render("show.ejs", {
        pokemon: Pokemon[req.params.id],
        id: req.params.id
    });
});



module.exports = router;