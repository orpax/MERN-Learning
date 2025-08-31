var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("KAMI ADALAH HALAMAN USERS");
});

module.exports = router;
