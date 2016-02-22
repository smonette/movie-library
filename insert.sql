DROP TABLE IF EXISTS movies;

CREATE TABLE movies( id SERIAL PRIMARY KEY, title VARCHAR, review TEXT, image TEXT, rating INTEGER );

INSERT INTO movies (title, review, image, rating)
VALUES
  ('Deadpool','It was great!', 'NULL', 4);


INSERT INTO movies (title, review, image, rating)
VALUES
  ('Star Wars: The Force Awakens','It love REY', 'NULL', 5);