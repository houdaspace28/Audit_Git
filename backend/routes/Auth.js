import UserModel from "../models/User.js";
import express from "express";
import connectDB from "../db/connection2.js";
import bcrypt from "bcrypt";

const router = express.Router();
router.post("/register", async (req, res) => {
    await connectDB();
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).send("Access Denied");
    const validPassword = awaitbcrypt.compare(password, user.password);
    if (!validPassword) return res.status(404).send("Wrong password !");

});