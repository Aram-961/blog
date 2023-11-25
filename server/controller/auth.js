import db from "../db.js";
import bcrypt from 'bcrypt'

export const register = (req, res) => {
  // check existing user
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    // check if any error and display it
    if (err) return res.json(err);
    // if there's data return response
    if (data.length) return res.status(409).json("User already exists !");

    // Hashing Password & creating a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
