import express from "express";
import { addPost } from "../controller/post.js";

const router = express.Router();

router.get('/test', (req, res) => {
  res.json('ressss')
})
