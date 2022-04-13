# Smart TO DO List

### Display Requirements

- Login/Register
  - [] Form will display if the user is not logged in, will slide up and display home
    page once logged in utilizing single-page app features.
  - [] Nav bar is hidden
- Home Page
  - [] Fixed Nav bar at the top with logout button and welcome username (Stretch)
  - [] Tasks will be displayed on the home page in the correct categories.
  - [] Logo in the middle of the Nav
  - [] has padding on both sides
  - [] Floating new task button as the footer
  - [] Each task will have a delete/completed button right aligned

### Behavioural Requirements

#### Home page

- `POST /entry/login`
- [] When user logs in, redirects to home page
- `GET /home`
  - [] Renders the user's existing tasks on the page into the correct category containers
  - [] When clicked, floating new task button populates form for submitting new task
- `POST /home/tasks`
  - [] When a user submits a new task, the task will be categorized via APIs and rendered
    - [] New task will be inserted into the database
- `POST /logout`
  - [] If user logs out, clear cookies and display login/register form (stretch)
- `PUT /home/tasks`
  - [] If complete button is clicked, clear task and update database
- `DELETE /home/tasks`
  - [] If delete button is clicked, clear task and delete from database
