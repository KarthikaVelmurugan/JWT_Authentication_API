const cryptoJs = require("crypto-js");

const encodePassword = (password) => {
  const hashedPassword = cryptoJs.SHA256(password).toString();
  return hashedPassword;
};

module.exports = {
  encodePassword: encodePassword,
};
