const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const saveJWTToken  = require("../controllers/saveJWTToken.controller");

dotenv.config();

const generateJWTToken = (req, res) => {
  let jwtSecretKey = process.env.SECRET_KEY;
  let data = {
    username: req.body.username,
    password: req.body.password,
  };
  const token = jwt.sign(data, jwtSecretKey);
  const result = saveJWTToken.saveJWTToken(data.username, token, res);
  if (result) {
    console.log("JWT token inserted succesfully in the DB");
  } else {
    res.json({ status: 400, message: "Please logout and try again!" });
  }
};

module.exports = {
  generateJWTToken: generateJWTToken,
};
