const jwt = require("jsonwebtoken");

const sendToken = async (userId) => {
  return await jwt.sign({ userId: userId }, JWT_SECRET_KEY='IAmMalikSaif', {
    expiresIn: `5d`,
  });
};

const sendCookie = async (res, statusCode, token, user, message) => {
  const COOKIE_EXPIRE_DAYS = 7; // Set expiration in days, here as 7 days

  const options = {
    expires: new Date(Date.now() + COOKIE_EXPIRE_DAYS * 24 * 60 * 60 * 1000), // Calculate expiration
    httpOnly: true,
  };

  res.cookie("token", token, options);
  res.status(statusCode).json({
    success: true,
    message,
    user,
    token,
  });
};

module.exports = { sendToken, sendCookie };
