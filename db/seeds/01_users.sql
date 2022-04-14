INSERT INTO users (username, email, password) VALUES ('Alice123','alice123@gmail.com', 'password');
INSERT INTO users (username, email, password) VALUES ('CatLover', 'catlover@gmail.com', 'password');
INSERT INTO users (username, email, password) VALUES ('DogLover', 'doglover@gmail.com', 'password');
INSERT INTO users (username, email, password) VALUES ('FoodLover', 'foodlover@gmail.com', 'password');
INSERT INTO users (username, email, password) VALUES ('LoveLover', 'lovelover@gmail.com', 'password');

INSERT INTO categories (name) VALUES ('Watch');
INSERT INTO categories (name) VALUES ('Eat');
INSERT INTO categories (name) VALUES ('Read');
INSERT INTO categories (name) VALUES ('Buy');

INSERT INTO tasks (
  user_id,
  category_id,
  name,
  is_completed,
  priority,
  description
)
VALUES (1,3,'Read Harry Potter', FALSE, 0, 'description');

INSERT INTO tasks (
  user_id,
  category_id,
  name,
  is_completed,
  priority,
  description,
  start_date,
  end_date
  )
VALUES (1,1,'Watch Family Guy', FALSE, 0, 'description', '2022-04-09', '2022-05-09');

INSERT INTO tasks (
  user_id,
  category_id,
  name,
  is_completed,
  priority,
  description
  )
VALUES (3,2,'Eat a salad', TRUE, 2, 'description');

