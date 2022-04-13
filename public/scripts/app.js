// Client facing scripts here
$(() => {
  $(".form-login").submit((event) => {
    // event.preventDefault();
    let $email = $(".email-input").val();
    let $password = $(".password-input").val();
    console.log($email, $password);

    $.post("/entry/login", { $email, $password }).then(() => {
      console.log("hi");
    });
  });

  $(".add-task-form").submit((event) => {
    event.preventDefault();
    console.log("add task form event ");
    // $(#)
    let $taskName = $(".add-task-text").val();
    let $category = $("#category").val();
    console.log("taskname is ", $taskName);

    let object = { $taskName, $category };

    $.post("/home/tasks", object, (result) => {
      console.log("this is the result of ajax post : ", result);

    });
    // .then((result) => {
    // console.log("ajax call result ", result);
    // return $(".movie-list").prepend(result);
  });
  // });
});


function escape(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
  
}
