const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {UserSchema, UserModel} = require("../model/UserModel");
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || "jwt_secret_key";

// Signup route
router.post("/signup", async(req, res) => {
    try{
        const {email, password} = req.body;
        const existingUser = await UserSchema.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: "User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new UserSchema({email, password: hashedPassword});
        await newUser.save();
        res.status(201).json({message: "User registered successfully"});
    } catch (error) {
        console.error("Singup Error:", error);
        res.status(500).json({message: "Server error", error: error.message});
    }
});

//Login route
router.post("/login", async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(400).json({message: "invalid email or password"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: "Invalid email or password"});
        }

        const token = jwt.sign({id: user._id, email: user.email}, JWT_SECRET,{
            expiresIn: "1h"
        });

        res.status(200).json({message: "Logged in successfully", token});
    } catch (error){
        console.error("Login Error:", error);
        res.status(500).json({message: "Server error", error: error.message });
    }
});

module.exports = router;