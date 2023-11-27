import db from "../db.js";
import bcrypt from "bcrypt";

export const register = (req, res) => {
  // check existing user
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(
    q,
    [req.body.email, req.body.username, req.body.number],
    (err, data) => {
      // check if any error and display it
      if (err) return res.status(500).json(err);

      // if there's data return response
      if (data.length) return res.status(409).json("User already exists !");

      // Hashing Password & creating a user
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      // Inserting to user's table
      const q =
        "Insert INTO users(`username`, `email`,`number`,`password`) VALUES (?)";

      const values = [req.body.username, req.body.email, req.body.number, hash];

      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has been created.");
      });
    }
  );
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
