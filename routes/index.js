const express = require("express");
const { addNewTask } = require("../helperfuncs/helpfunctions");
const router = express.Router();

router.get("/", (req, res) => {
  // loadTasks()


  return res.render("index"); //pass in user object here with tasks
});
router.post("/tasks", (req, res) => {
  console.log("req body is ", req);
  const task = req.body["$taskName"];
  const category = req.body["$category"];
  const id = req.session.user_id;
  console.log("cookie is : ", req.session.user_id);
  addNewTask(id, task, category).then((result) => {
    console.log("success~!");
    res.json(result);
  });
  // res.send("hello");
});

router.post("/:taskId", (req, res) => {});

router.put("/:taskid");

router.delete("/:taskId", (req, res) => {});

module.exports = router;
