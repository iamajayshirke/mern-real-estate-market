import express from "express";
import { signin } from "../controllers/auth.controller.js";

const authRoute = express.Router()
authRoute.post("/signin",signin)

export default authRoute