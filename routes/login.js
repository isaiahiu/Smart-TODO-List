const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.session.user_id) {
    //if user already logged in redirect to homepage
    res.redirect("/");
  }
  next();
});

router.get("/", (req, res) => {
  return res.render("login"); // load login page
});

router.post("/", (req, res) => {
  // check user email exists and password matches here w/ function
  if (error) {
    return res.status(403).send(error);
  }
  req.session.user_id = data.id; // assign session cookie to user's id
  res.redirect("/");
});

module.exports = router;
