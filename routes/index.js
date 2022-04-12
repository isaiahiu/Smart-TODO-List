const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.render("index"); //pass in user object here with tasks
});
router.post("/tasks", (req, res) => {
  console.log(req.body);
  res.send("hello");
});

router.post("/:taskId", (req, res) => {});

router.put("/:taskid");

router.delete("/:taskId", (req, res) => {});

module.exports = router;
