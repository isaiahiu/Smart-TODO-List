const db = require("../db/database");
const axios = require("axios").default;

const catergorizer = function (taskName) {
  const options = {
    method: "GET",
    url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${taskName}`,
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "CA",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      "X-RapidAPI-Key": "8fd5c2e042msh28ad9d03a7b1180p12b629jsn6eb8b3d94403",
    },
  };
  return axios
    .request(options)
    .then((result) => {
      return result.data.results;
    })
    .catch((err) => console.log(err));
};

function searchResults(arr) {
  let categoryID;
  for (const result of arr) {
    let search = Object.values(result);
    let category = wordMatch(search);
    switch (category) {
      case "watch":
        categoryID = 1;
        break;
      case "eat":
        categoryID = 2;
        break;
      case "read":
        categoryID = 3;
        break;
      case "shop":
        categoryID = 4;
    }
  }
  return categoryID;
}

function wordMatch(arr) {
  for (const searchString of arr) {
    console.log(searchString);
    for (const category in categories) {
      for (const word of categories[category].keywords) {
        if (typeof searchString === "string") {
          if (searchString.includes(word)) {
            return category;
          }
        }
      }
    }
  }
}

const categories = {
  watch: {
    keywords: [
      "watch",
      "movie",
      "movies",
      "film",
      "show",
      "series",
      "rottentomatoes",
    ],
  },
  read: {
    keywords: ["book", "books", "read", "goodreads"],
  },
  shop: {
    keywords: ["buy", "toy", "amazon", "shop"],
  },
  eat: {
    keywords: ["restaurant", "food", "drink", "drinks", "eat", "Eat"],
  },
};
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

// TODO: MAKE SURE THERE IS A CHECK FOR CREDENTIALS
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
const addNewTask = function (userid, name, category_id) {
  const query = `
    INSERT INTO tasks (user_id, name, category_id)
    VALUES ($1, $2, $3)
    RETURNING*`;
  const values = [userid, name, category_id];
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
  catergorizer,
  searchResults,
};
