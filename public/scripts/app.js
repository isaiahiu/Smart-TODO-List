// Client facing scripts here
$(() => {
  loadTasks();

  $(".form-login").submit((event) => {
    event.preventDefault();
    let $email = $(".email-input").val();
    let $password = $(".password-input").val();
    console.log($email, $password);

    $.post("/entry/login", { $email, $password }).then(() => {});
  });

  $(".add-task-form").submit((event) => {
    event.preventDefault();
    let $taskName = $(".add-task-text").val();
    let $category = $("#category").val();

    let object = { $taskName, $category };

    $.post("/home/tasks", object, (result) => {
      $(".movie-list").empty();
      $(".eat-list").empty();
      $(".book-list").empty();
      $(".product.list").empty();
      loadTasks();
    });
  });
});

// escape function to protect against XSS

function escape(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTaskElement(task) {
  // use escape helper function here
  const safeHTML = `${escape(task.name)}`;
  const $category = task.category_id;
  // get user details from object and create html with user data
  const $taskName = `
   <li>${safeHTML}</li>`; // TODO: will need rest of HTML here
  return { $taskName, $category };
}

// Takes in array of objects, calls createTaskElement, posts result in reverse chronological order to html
function renderTasks(arr) {
  for (let task of arr) {
    const $task = createTaskElement(task);
    switch ($task.$category) {
      case 1:
        $(".movie-list").append($task.$taskName);
        break;
      case 2:
        $(".eat-list").append($task.$taskName);
        break;
      case 3:
        $(".book-list").append($task.$taskName);
        break;
      case 4:
        $(".product-list").append($task.$taskName);
    }
  }
}

// make AJAX GET request to /tasks and calls function to render tasks onto page
function loadTasks() {
  $.get("/home").then((data) => {
    renderTasks(data);
  });
}
