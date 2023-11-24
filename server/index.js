import express from "express";

const app = express();

app.use(express.json());

// testing server if working
app.get("/", (req, res) => {
  res.json("to all my niggers white and browns que pasa amigo");
});

app.listen(8000, () => {
  console.log(`Connected to Server !`);
});
