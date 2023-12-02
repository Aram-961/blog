import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "blogalien",
});

// checking if db is connected

db.connect((err) => {
  if (err) {
    console.log("db connection failed");
  } else {
    console.log("connected to db");
  }
});
