const express = require("express");
const router = express.Router();

router.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

module.exports = router;
