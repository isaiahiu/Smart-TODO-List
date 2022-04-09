const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.render("index");
  // queryhere.then((tasks) => {
  //   // res.render, res.send, res.redirect

  // });
});

module.exports = router;
