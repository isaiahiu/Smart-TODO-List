const db = require("../db/database");

//adding a new user to the database
const addUser = function (user) {
  let query = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3, $4)
    RETURING *`;
  const values = [user.username, user.email, user.password];
  return db
    .query(query, values)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err.message));
};

//User Login
const userLogin = function (email, password) {
  const query = `
    SELECT * FROM users WHERE email = $1 AND password = $2`;
  const value = [email, password];
  return db
    .query(query, value)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err.message));
};

//see all tasks for a user:
const userTasks = function (userid) {
  const query = `
    SELECT * FROM tasks
    WHERE tasks.user_id = $1
    ORDER BY tasks.start_date
    `;
  const value = [userid];
  return db
    .query(query, value)
    .then((res) => res.rows)
    .catch((err) => console.log(err.message));
};

//Add new Task to the datbase
const addNewTask = function (userid, name, category) {
  const query = `
    INSERT INTO tasks (user_id, category_id, name, priority)
    VALUES ($1, $2, $3, $4)
    RETURNING*`;
  const values = [userid, name, category];
  return db
    .query(query, values)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err.message));
};

//delete task from the database
const deleteUserTask = function (userid, taskid) {
  let query = `
    DELETE FROM tasks WHERE user_id = $1 AND id = $2`;
  const values = [userid, taskid];
  return db
    .query(query, values)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err.message));
};

module.exports = {
  addUser,
  userLogin,
  userTasks,
  addNewTask,
  deleteUserTask,
};
