import {DB, log} from "../deps.js";

// Open a database
const db = new DB("project.db");

log.info("Database build successfully")

db.query(`
  CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  )
`);

export default db;