const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const crypto = require("crypto");
exports.register =catchAsyncErrors(async(req,res,next)=>{
    const { name,roll_number,phone_no, email,gender, password } = req.body;

  const user = await User.create({
    name,
    roll_number,
    email,
    phone_no,
    gender,
    password,
  });

  sendToken(user, 201, res);
});
exports.login =catchAsyncErrors(async(req,res,next)=>{
    const { email, password } = req.body;

    // checking if user has given password and email both
  
    if (!email || !password) {
      return res.status(400).send("please provide proper mail or password");
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
      return next(res.status(401).send("user not exist"));
    }
  
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(res.status(402).send("password not matched"));
    }
  
    sendToken(user, 200, res);
});

exports.logout =catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  });
