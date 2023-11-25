import express from "express";

const app = express.Router();

app.get("/test", (req, res) => {
  res.json("from controller");
});
