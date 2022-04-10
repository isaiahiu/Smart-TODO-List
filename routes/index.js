const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (!req.session.user_id) {
    res.redirect("/entry");
  }
  next();
});

router.get("/", (req, res) => {
  return res.render("index"); //pass in user object here with tasks
});

router.post("/:taskId", (req, res) => {});

router.put("/:taskid");

router.delete("/:taskId", (req, res) => {});

router.post("/", (req, res) => {
  return;
});

module.exports = router;
