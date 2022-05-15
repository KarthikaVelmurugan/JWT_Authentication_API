const logout = require("../controllers/logout.controller");
const decodeJWTToken = require("../services/decodeJWTToken.service");

const logoutService = async (req, res) => {
  let username = decodeJWTToken.decodeJWTToken(req, res);
  res.json(await logout.logout(username, res));
};

module.exports = {
  logoutService: logoutService,
};
