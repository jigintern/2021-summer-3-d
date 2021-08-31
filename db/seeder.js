import db from "./setupDB.js";

// add sample data (test)
db.query(
  `INSERT INTO articles (name) VALUES ((?))`,
  ["sampleArticles1"]
);
db.query(
  `INSERT INTO articles (name) VALUES ((?))`,
  ["sampleArticles2"]
);