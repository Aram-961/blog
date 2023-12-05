import express from "express";
import { db } from "../database.js";

const app = express.Router();

export const getPosts = (req, res) => {
  // condition checking if there's category in db
  const SelectFromAllPosts = req.query.cat
    ? "SELECT * FROM posts WHERE cat = ?"
    : "SELECT * FROM posts";
  // DATABASE
  db.query(SelectFromAllPosts, [req.query.cat], (err, data) => {
    if (err) return res.json(err);

    // else return the data
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  res.json("getting post from controller");
};

export const addPost = (req, res) => {
  res.json("getting post from controller");
};

export const deletePost = (req, res) => {
  res.json("getting post from controller");
};

export const updatePost = (req, res) => {
  res.json("getting post from controller");
};
