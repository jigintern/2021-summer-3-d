import {DB, log} from "../deps.js";

// Open a database
const db = new DB("project.db");

log.info("Database build successfully");

db.query(`
  CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userName TEXT,
    gameName TEXT,
    profile TEXT,
    schedule TEXT,
    meal_description TEXT,
    notice TEXT
  )
`);

// import articles data from _data folder
const articles = JSON.parse(Deno.readTextFileSync("./_data/sample.json"));

articles.forEach((article, index) => {
  db.query(
    `INSERT INTO articles (userName, gameName, profile, schedule, meal_description, notice) VALUES (
      (?), (?), (?), (?), (?), (?)
    )`,
    [
      article.userName,
      article.gameName,
      article.profile,
      JSON.stringify(article.schedule),
      article.meal_description,
      article.notice
    ]
  );
})

export default db;