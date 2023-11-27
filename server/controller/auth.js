import db from "../db.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

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

export const login = (req, res) => {
  // checking if user exists or !

  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err || data.length === 0)
      return res.status(404).json("user not found", err);

    // Check password
    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    // condition checking if pwd is valid
    if (!isPasswordValid)
      return res.status(404).json("wrong username or password who knows lol");

    // COOKIES 🍪
    const token = Jwt.sign({ id: data[0].id }, "jwtkey");
    // prevent cookie from sending pwd to LS
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(data[0]);
  });
};

export const logout = (req, res) => {};
