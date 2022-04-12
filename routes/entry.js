const express = require("express");
const userLogin = require("../helperfuncs/helpfunctions").userLogin;
const router = express.Router();
// router.use((req, res, next) => {
//   if (req.session.user_id) {
//     //if user already logged in redirect to homepage
//     res.redirect("/");
//   }
//   next();
// });

router.get("/", (req, res) => {
  // no use for get method
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  userLogin(email, password)
    .then((result) => {
      console.log("result: ", result);
      req.session.user_id = result.id; // assign session cookie to user's id
      return res.json(result);
    })
    // .then((result) => {
    //   const tasks = userTasks(result.id);
    //   return res.json({ result, tasks });
    // })
    .catch((err) => {
      return res.status(403).send(err);
    });
  // res.send("hello again");
});

// router.post("/register", (req, res) => {
//   addUser(req.body).then((result) => {
//     req.session.user_id = result.id; // assign cookie
//     return res.JSON(result);
//   });
// });

module.exports = router;
