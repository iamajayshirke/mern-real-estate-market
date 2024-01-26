import express from "express";
import test from "../controllers/user.controller.js";
import { signin } from "../controllers/auth.controller.js";

const userRoute = express.Router()

userRoute.get("/test",test)
userRoute.post("/signin",signin)

export default userRoute