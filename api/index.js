import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js";
dotenv.config()
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

app.use('/api/user',userRoute)