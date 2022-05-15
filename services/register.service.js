const register = require("../controllers/register.controller");
const encodePassword = require("./commonMethod");

const registerService = async (req, res) => {
  let username = req.body.username;
  let password = encodePassword.encodePassword(req.body.password);
  const result = await register.register(username, password, res);
  res.json(result);
};

module.exports = {
  registerService: registerService,
};
