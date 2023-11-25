import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // if no pwd keep it empty
  database: "blog",
});

export default db;
