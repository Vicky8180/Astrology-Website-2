

const adminModel = require('../model/adminSchema')
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const Auth = async (req, res, next) => {
  const token = req.cookie; 
    console.log(token)
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized - Session Time out",
      success:false
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const data = await adminModel.findById({ _id: decoded.id });

    if (!data) {
      return res.status(401).json({
        message: "Unauthorized - User not found",
      });
    }

    // Attach user data to the request for use in later middleware or routes
    res.user = data;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized - Invalid token",
    });
  }
};

module.exports = Auth;
