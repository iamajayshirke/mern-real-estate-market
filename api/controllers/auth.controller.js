import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
export const signin = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedpassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedpassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    next(error);
  }
};
export const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  const validUser = await User.findOne({ email });
  if (!validUser) return next(errorHandler(400, "User Not Found"));
  const validCreds = bcrypt.compareSync(password, validUser.password);
  if (!validCreds) return next(errorHandler(400, "Invalid Credentials"));
  const token = jwt.sign({ id: validUser._id }, process.env.SECRET_KEY);
  const {password:pass, ...rest} = validUser._doc
  res.cookie("token", token, { httpOnly: true }).status(200).json(rest);
};
