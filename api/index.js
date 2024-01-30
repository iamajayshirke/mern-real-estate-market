import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js";
import authRoute from "./routes/auth.routes.js";
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then((e) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err, "Error While Connecting to DB");
  });

app.listen(3000, () => {
  console.log("server running on 3000");
});

//Configs
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);


// Error Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res
    .status(statusCode)
    .json({ success: "false", status: statusCode, message: message });
});