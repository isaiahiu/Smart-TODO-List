const express = require("express");
const { addNewTask } = require("../helperfuncs/helpfunctions");
const router = express.Router();

router.get("/", (req, res) => {
  return res.render("index"); //pass in user object here with tasks
});
router.post("/tasks", (req, res) => {
  console.log("req body is ", req.body);
  const task = req.body.addTask;
  const category = req.body["category-dd"];
  const id = req.session.user_id;
  addNewTask(id, task, category).then((result) => {
    return res.json(result);
  });
  // res.send("hello");
});

router.post("/:taskId", (req, res) => {});

router.put("/:taskid");

router.delete("/:taskId", (req, res) => {});

module.exports = router;
