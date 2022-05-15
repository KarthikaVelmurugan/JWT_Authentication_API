const login = require("../controllers/login.controller");
const generateJWTToken = require("../services/generateJWTToken.service");
const encodePassword = require("./commonMethod");

const loginService = async (req, res) => {

  const username = req.body.username;
  const password = encodePassword.encodePassword(req.body.password);
  const result = await login.login(username,password, res);
  if (result.length >= 1) generateJWTToken.generateJWTToken(req, res);
  else res.json({ status: 400, message: "Invalid Credentials" });
};

module.exports = {
  loginService: loginService,
};
