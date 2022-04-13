const express = require("express");
const userLogin = require("../helperfuncs/helpfunctions").userLogin;
const router = express.Router();

router.get("/", (req, res) => {
  // no use for get method
});

router.post("/login", (req, res) => {
  const { $email, $password } = req.body;
  userLogin($email, $password)
    .then((result) => {
      req.session.user_id = result.id; // assign session cookie to user's id
      return res.json(result);
    })
    .catch((err) => {
      return res.status(403).send(err);
    });
});

// router.post("/register", (req, res) => {
//   addUser(req.body).then((result) => {
//     req.session.user_id = result.id; // assign cookie
//     return res.JSON(result);
//   });
// });

module.exports = router;
