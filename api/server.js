import express from "express";
import cors from "cors";

// Routes
import postRoute from "./routes/posts.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();

// Using the cors middleware
app.use(cors());

app.use(express.json());

// Cookies 🍪
app.use(cookieParser());

// EndPoints
app.use("/api/auth/", authRoute);
app.use("/api/user/", userRoute);
app.use("/api/posts/", postRoute);

app.use("/auth", (req, res) => {
  res.json("auth is showing server is ok 200");
});

app.listen(3001, () => {
  console.log("connected to server on PORT 3001");
});
