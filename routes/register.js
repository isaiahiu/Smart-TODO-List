const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.session.user_id) {
    res.redirect("/");
  }
  next();
});

router.get("/", (req, res) => {
  return res.render("register");
});

router.post("/", (req, res) => {
  const { username, email, password } = req.body;
  //function here to create new user with vars above, returns object
  req.session.user_id = data.id; // assign cookie
  res.redirect("/");
});

module.exports = router;
