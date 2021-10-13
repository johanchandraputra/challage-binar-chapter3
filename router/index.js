const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    res.render("index");
});

router.get("/gameRPS", (req, res) =>{
    res.render("gameRPS");
});


module.exports = router;