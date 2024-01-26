import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
export const signin = async (req, res,next) => {
  const { username, email, password } = req.body;
  const hashedpassword = bcrypt.hashSync(password,10)
  const newUser = new User({ username, email, password:hashedpassword });
  try {
      await newUser.save();
      res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    next(error)
  }
};
