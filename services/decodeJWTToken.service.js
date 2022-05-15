const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const decodeJWTToken = (req, res) => {
  let headerKey = process.env.HEADER_KEY;
  let secretKey = process.env.SECRET_KEY;
  const token = req.header(headerKey);
  let username = null
   jwt.verify(token, secretKey, (err, result) => {
    if (err) console.log("Error occured! during decode");
    else{

        username = result.username
    } 
  });
  return username
  
};

module.exports = {
  decodeJWTToken: decodeJWTToken,
};
