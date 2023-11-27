import express from "express";
// was facing an internalBinding error i solved it by adding .js at the end of the import
import postRoute from "./routes/posts.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import cors from 'cors'

const app = express();

app.use(express.json());

// Using the cors middleware
app.use(cors());

// EndPoint
app.use("/api/auth/", authRoute);
app.use("/api/user/", userRoute);
app.use("/api/posts/", postRoute);

app.listen(8000, () => {
  console.log(`Connected to Server !`);
});
