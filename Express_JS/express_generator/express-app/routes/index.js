var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Belajar JS Express",
    author: "Orpax",
    message: "Belajar Express Dengan Mudah",
  });
});

module.exports = router;
