const sendError = require("../utils/sendError");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const isAuthUser = async (req, res, next) => {
  try {
    //Get Token From Cookies
    if (req.cookies.token) {
      console.log("Token found:", req.cookies.token);
      //Verify Token
      const { userId } = jwt.verify(
        req.cookies.token,
        'IAmMalikSaif'
      );
      //Get User From Token
      req.user = await userModel.findById(userId).select("-password");
      next(); 
    } else {
      console.log("Token missing from cookies");
      sendError(res, 400, "");
    }
  } catch (error) {
    console.log("Token verification error:", error.message);
    sendError(res, 400, "Token Not Found..!!");
  }
};

module.exports = isAuthUser;
