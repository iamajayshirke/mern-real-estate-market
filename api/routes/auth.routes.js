import express from "express";
import { signUp, signin } from "../controllers/auth.controller.js";

const authRoute = express.Router()
authRoute.post("/signin",signin)
authRoute.post("/signup",signUp)

export default authRoute