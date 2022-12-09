const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");
const catchAsyncErrors = require("./catchAsyncErrors");
exports.isAuthenticatedUser =catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;
    //console.log(token);
    if (!token) {
      return res.status(501).send("No token is generated");
    }
  
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  
    req.user = await User.findById(decodedData.id);
  
    next();
  });