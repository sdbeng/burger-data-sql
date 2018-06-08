var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", (req, res) => {
    res.redirect("/burgers");
  });

router.get("/burgers", (req, res) => {
    // express cb response by calling burger.selectAll
    burger.selectAll((burgerData) => {
        // wrapper for orm.js using mysql query cb, will return burger_data render to index hbs template
        res.render("index", {burger_data: burgerData})
    })
})

// post route
// router.post