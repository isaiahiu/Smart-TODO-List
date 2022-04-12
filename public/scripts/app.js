// Client facing scripts here
$(() => {
  $(".form-login").submit((event) => {
    event.preventDefault();
    let $email = $(".email-input").val();
    let $password = $(".password-input").val();
    console.log($email, $password);

    $.post("/entry/login", { $email, $password }).then(() => {
      console.log("hi");
    });
  });

  // $(".add-task-form").submit((event) => {
  //   event.preventDefault();
  //   let $task = $("");
  // });
});
