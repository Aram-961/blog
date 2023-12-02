import bcrypt from "bcrypt";
import { db } from "../database.js";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // checking existing user

  const checkUserQuery = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(checkUserQuery, [req.body.email, req.body.username], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (data.length) {
      return res.status(409).json("User already exists!");
    }

    // Hash the password

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // INSERT user into the table
    const insertUserQuery =
      "INSERT INTO users(`username`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(insertUserQuery, values, (insertErr) => {
      if (insertErr) {
        return res.status(500).json(insertErr);
      }

      return res.status(200).json("User has been created.");
    });
  });
};

// Login

export const login = (req, res) => {
  //CHECK USER

  const checkUserQuery = "SELECT * FROM users WHERE username = ?";

  db.query(checkUserQuery, [req.body.username], async (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");

    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

// Logout

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      // config
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("user has been logged out bye !");
};
